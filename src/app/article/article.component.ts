import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  // styleUrls: ['./article.component.scss']
  styles: []
})
export class ArticleComponent implements OnInit {
  site: string;
  title: string = "Test";
  author: string = "Test";
  article: string = "Test";
  
  constructor() { }

  selectSite(site: string) {
    return site;
  }

  selectRandomArticle(id: number) {
    return id;
  }

  getAuthor(author: string) {
    return author;
  }

  ngOnInit() {
    
  }

}
