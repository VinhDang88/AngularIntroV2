import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  menu:MenuItem[] = [
    {
      item: "Chicken Fingers",
      category: "Dinner",
      price: 11.99
    },
    {
      item: "Pizza",
      category: "Dinner",
      price: 15.99
    },
    {
      item: "Wings",
      category: "Sides",
      price: 8.99
    },
    {
      item: "Breadsticks",
      category: "Sides",
      price: 5.99
    },
    {
      item: "Cesar Salad",
      category: "Salads",
      price: 5.99
    },
    {
      item: "Hot Fudge Brownie",
      category: "Desert",
      price: 10.99
    },




  ]

  names: string[] = ["Justin", "Josh", "Billy", "Tommy", "Jeff"];
}
