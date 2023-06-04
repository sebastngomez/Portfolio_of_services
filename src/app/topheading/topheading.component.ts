import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { Article, News } from '../interfaces/news.interfaces';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})


export class TopheadingComponent implements OnInit {

  constructor( private newsapiservicesService:NewsapiservicesService){}

  ngOnInit(): void {
      return this.newsapiservicesService.topHeading();
  }

  get topheadingDisplay(): Article[]{
    return this.newsapiservicesService.newsList;
  }

}
