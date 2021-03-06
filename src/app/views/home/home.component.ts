import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeViewComponent {
  users;

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any[]) => { this.users = data
      })
  }
}
