import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  burgerCategories = [
    {
      title: 'Popular Item',
      items: [
        {
          name: 'Cheese Burger-fucking',
          price: 199,
          //image: 'assets/cheese-burger.jpg',
        },
        {
          name: 'Chicken Burger9963',
          price: 299,
          //image: 'assets/chicken-burger.jpg',
        },
        {
          name: 'Veg Burger',
          price: 99,
          //image: 'assets/chicken-burger.jpg',
        },
      ],
    },
    {
      title: 'Special Offers',
      items: [
        {
          name: 'Cheese Burger',
          price: 199,
          //image: 'assets/special-cheese.jpg',
        },
        {
          name: 'Chicken Burger',
          price: 299,
          //image: 'assets/special-chicken.jpg',
        },
        {
          name: 'Veg Burger',
          price: 99,
          //image: 'assets/chicken-burger.jpg',
        },
      ],
    },
    {
      title: 'New Arrival Item',
      items: [
        {
          name: 'Deluxe Cheese',
          price: 199,
          //image: 'assets/deluxe-cheese.jpg',
        },
        {
          name: 'Deluxe Chicken',
          price: 299,
          //image: 'assets/deluxe-chicken.jpg',
        },
        {
          name: 'Veg Burger',
          price: 99,
          //image: 'assets/chicken-burger.jpg',
        },
      ],
    },
  ];

  addToCart(burger: any) {
    alert(`${burger.name} added to cart!`);
    console.log(burger.name);
  }
}
