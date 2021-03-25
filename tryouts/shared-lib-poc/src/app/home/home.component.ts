import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api-rv.herokuapp.com/rv/v1/resources?sukta=136')
        // .pipe(map((res: Response) => res.json()))
        // .toPromise()
        .subscribe((articles: any) => console.log(articles));
  }

}
