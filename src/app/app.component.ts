import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AppComponentService } from './app.component.service';
import validator from 'validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private readonly _appComponentService: AppComponentService) {}

  // public regExp: RegExp = new RegExp('^(?:http(s)?:\\/\\/)?[\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\]@!\$&' + '\\(\\)\\*\\+,;=.]+$/gm') ;
  // public regExp = new RegExp('^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$');
  
  public inputLink = new FormControl('', [Validators.required]);
  public show: boolean = false;
  public outputView: Array<{ link: string; shortenedLink: string }> = [];
  public errorMessage: string;
  
  public ngOnInit(): void {}

  public getStarted() {
    this.show = true;
  }

  public navigate(newLink: string) {
    window.open(newLink, '_blank');
  }

  public getErrorMessage() {
    console.log(this.inputLink.value);
    if (this.inputLink.value && !validator.isURL(this.inputLink.value)) {
      this.errorMessage = 'Enter a valid URL';
    } else { this.errorMessage = ''; }
    if (!this.inputLink.value) {
      this.errorMessage = '';
    }
  }

  public shortenIt(): void {
    this._appComponentService.postShortenedURL(this.inputLink.value).subscribe(
      (response: any) => {
        this.outputView.push({
          link: this.inputLink.value,
          shortenedLink: 'https://rel.ink/' + response.hashid,
        });
        this.inputLink.reset();
      }
      // , (error: any) => {
      //   this.errorMessage = error.error.url[0];
      //   this.inputLink.reset();
      // console.log('Error is: ', this.errorMessage);
      // }
    );
  }

  // getRequiredError() {
  //   if (this.inputLink.hasError('required')) {
  //     return 'Field cannot be empty.';
  //   }
  // }

  // getPatternError() {
  //   if (this.inputLink.hasError('pattern')) {
  //     return this.errorMessage;
  //   }
  // }
}
