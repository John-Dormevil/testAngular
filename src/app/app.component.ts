import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './view/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {
  private title: string;

  public constructor() {
    this.title = 'Tour of Heroes';
  }

  public getTitle(): string {
    return this.title;
  }
}
