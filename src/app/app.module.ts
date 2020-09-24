import {} from 'valid-url';

import { BreakPointRegistry, PrintHook, ɵMatchMedia } from '@angular/flex-layout/core';
import {
  FlexLayoutModule,
  FlexStyleBuilder,
  LayoutAlignStyleBuilder,
  LayoutStyleBuilder,
  MediaMarshaller,
  StyleUtils,
  StylesheetMap,
} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppComponentService } from './app.component.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {ClipboardModule} from 'ngx-clipboard';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

// import { ClipboardModule } from 'ngx-clipboard';
@NgModule({
  declarations: [AppComponent],
  imports: [MatTooltipModule,
    BrowserModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule,
    MatIconModule,
  ],
  providers: [
    StyleUtils,
    StyleSheet,
    StylesheetMap,
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia, BreakPointRegistry, PrintHook,
    AppComponentService,
    HttpClient,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
