import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Article, News } from '../interfaces/news.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  public newsList:Article[]=[];
  private serviceUrl:string ='https://newsapi.org/v2';
  private country:string ='us';
  private api_Key = '72aa77670e41407987e351e917ca5c11';

  constructor(private http:HttpClient) { }


  //topheading
  topHeading():void{
   const params = new HttpParams()
       .set('country',this.country)
       .set('apiKey',this.api_Key)

    this.http.get<News>(`${this.serviceUrl}/top-headlines`, {params})
        .subscribe( resp => {
          console.log(resp);
          this.newsList=resp.articles;
        });

  }


  // topHeading(): Observable<any>{
  //   return this._http.get(this.newsAppUrl);
  // }
}
