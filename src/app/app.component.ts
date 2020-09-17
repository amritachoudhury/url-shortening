import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public show: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

    public getStarted(){
      this.show = true;
    }
}
