import { Component, HostListener, OnInit } from '@angular/core';
import { ApiConsumerService } from '../api-consumer.service';

@Component({
  selector: 'app-digidex',
  templateUrl: './digidex.component.html',
  styleUrls: ['./digidex.component.scss'],
})
export class DigidexComponent implements OnInit {
  digimons: any[] = [];
  searchTerm: string = '';
  searchTerm2: string = '';
  currentPage = 0;
  itemsPerPage: number = 0;
  selectSearch = 'name';

  constructor(private apiConsumer: ApiConsumerService) {}

  ngOnInit(): void {
    if (window.innerWidth < 390) {
      this.itemsPerPage = 4;
    } else if (window.innerWidth < 510) {
      this.itemsPerPage = 6;
    } else {
      this.itemsPerPage = 8;
    }

    this.loadDigimons();

    console.log(this.itemsPerPage);
  }

  loadDigimons() {
    this.apiConsumer.getAllDigimons().subscribe((data: any) => {
      this.digimons = data;
    });
  }

  search(name: string) {
    if (name == '') {
      this.loadDigimons();
    }
    if (name) {
      this.apiConsumer.getDigimonByName(name).subscribe((data: any) => {
        this.digimons = Array.isArray(data) ? data : [data];
      });
    } else {
      this.loadDigimons();
    }
  }

  get paginatedDigimons() {
    const start = this.currentPage * this.itemsPerPage;
    return this.digimons.slice(start, start + this.itemsPerPage);
  }

  searchLevel(level: string) {
    if (level) {
      this.apiConsumer.getDigimonByLevel(level).subscribe((data: any) => {
        this.digimons = Array.isArray(data) ? data : [data];
      });
    } else {
      this.loadDigimons();
    }
  }

  goToNextPage() {
    this.currentPage++;
  }

  goToPreviousPage() {
    if (this.currentPage > 0) this.currentPage--;
  }

  resetSearch() {
    this.searchTerm = '';
    this.searchTerm2 = '';
    this.currentPage = 0;
    this.loadDigimons();
  }
}
