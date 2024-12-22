import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular19';
  // burgerCategories = [
  //   {
  //     title: 'Popular Item',
  //     items: [
  //       {
  //         name: 'Cheese Burger',
  //         price: 389,
  //         //image: 'assets/cheese-burger.jpg',
  //       },
  //       {
  //         name: 'Chicken Burger',
  //         price: 389,
  //         //image: 'assets/chicken-burger.jpg',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Special Offers',
  //     items: [
  //       {
  //         name: 'Cheese Burger',
  //         price: 389,
  //         //image: 'assets/special-cheese.jpg',
  //       },
  //       {
  //         name: 'Chicken Burger',
  //         price: 389,
  //         //image: 'assets/special-chicken.jpg',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'New Arrival Item',
  //     items: [
  //       {
  //         name: 'Deluxe Cheese',
  //         price: 489,
  //         //image: 'assets/deluxe-cheese.jpg',
  //       },
  //       {
  //         name: 'Deluxe Chicken',
  //         price: 489,
  //         //image: 'assets/deluxe-chicken.jpg',
  //       },
  //     ],
  //   },
  // ];

  // addToCart(burger: any) {
  //   alert(`${burger.name} added to cart!`);
  // }
}
