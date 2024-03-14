import { Component } from '@angular/core';
import { River } from '../../../shared/models/river.model';
import { RiverService } from '../../../services/river.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  rivers!: River[];
  filterName!: string;
  filterApplied: boolean = false;
  filteredRivers!: River[];
  
  constructor(private riverService: RiverService) { }

  ngOnInit(): void {
    this.getRivers();
  }

  getRivers(): void {
    this.riverService.getRivers()
      .subscribe(rivers => {
        this.rivers = rivers;
        this.filteredRivers = rivers;
      });
  }

  applyFilter(): void {
    // Implement your filtering logic here
    this.filterApplied = true;
  }
}
