import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.facebook.com/', 'https://www.apple.com/', 'https://www.amazon.com/', 'https://www.netflix.com/', 'https://www.google.com/'];
  constructor() { }

  ngOnInit() {
  }

}
