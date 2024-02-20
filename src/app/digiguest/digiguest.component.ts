import { Component } from '@angular/core';
import { ApiConsumerService } from '../api-consumer.service';

@Component({
  selector: 'app-digiguest',
  templateUrl: './digiguest.component.html',
  styleUrls: ['./digiguest.component.scss'],
})
export class DigiguestComponent {
  digimons: any[] = [];
  currentDigimon: any = {};
  guessType: 'name' | 'level' | undefined;
  guess: string = '';
  message: string = '';
  correctAnswerCount: number = 0;
  totalGuesses: number = 0;
  gameOver: boolean = false;
  gameWon: boolean = false;
  rulesModal: boolean = false;

  constructor(private apiConsumer: ApiConsumerService) {}

  ngOnInit(): void {
    this.loadDigimons();
    this.guessType = Math.random() > 0.5 ? 'name' : 'level';
  }

  loadDigimons() {
    this.apiConsumer.getAllDigimons().subscribe((data: any) => {
      this.digimons = data;
      this.nextChallenge();
    });
  }

  nextChallenge() {
    if (this.digimons.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.digimons.length);
      this.currentDigimon = this.digimons[randomIndex];
      this.guessType = Math.random() > 0.5 ? 'name' : 'level';
      this.guess = '';
      this.message = `Qual é o ${this.guessType} deste Digimon?`;
    }
  }

  submitGuess() {
    const correctAnswer =
      this.guessType === 'name'
        ? this.currentDigimon.name
        : this.currentDigimon.level;
    if (this.guess.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      this.message = 'Correto!';
      this.correctAnswerCount++;
      if (this.correctAnswerCount === 3) {
        this.gameWon = true;
      }
    } else {
      this.message = `Incorreto! A resposta correta era ${correctAnswer}.`;
      this.totalGuesses++;
      if (this.totalGuesses - this.correctAnswerCount === 3) {
        this.gameOver = true;
      }
    }
    setTimeout(() => this.nextChallenge(), 2000);
  }

  restartGame() {
    window.location.reload();
  }

  openRulesModal() {
    this.rulesModal = true;
  }

  closeRulesModal() {
    this.rulesModal = false;
  }
}
