import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  weclome!: string
  description!: string;
  promotions!: string[];

  ngOnInit(): void {
    this.weclome = "Welcome to our Online Store !";
    this.description = "Discover our latest collection of smartphones from top brands.";
    this.promotions = ["Get a free case with every smartphone purchase", "Trade-in your old phone and get up to 30% off", "Free expedited shipping on all smartphone orders"];

  }
}
