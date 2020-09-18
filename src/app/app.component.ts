import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  public show: boolean = false;
  public link: string = '';
  public opText: string;
  public errorMessage: string;

  public linkInput = new FormControl('', [Validators.required]);

  getErrorMessage() {
    console.log('Outside IF of getErrorMessage()');
    if (this.linkInput.hasError('required')) {
      return 'Link cannot be empty! Please enter a valid value';
      console.log('Inside IF of getErrorMessage()');
    }
  }

  public ngOnInit(): void {}

    public getStarted() {
      this.show = true;
    }

    public shortenIt(): void {
      this.opText = 'SUCCESS!!';
    }
  }
