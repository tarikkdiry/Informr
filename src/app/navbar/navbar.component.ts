import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: []
  // styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: String = "Informr";
  constructor() { }

  ngOnInit() {
  }

}
