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

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

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
  ],
  providers: [
    StyleUtils,
    StyleSheet,
    StylesheetMap,
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia, BreakPointRegistry, PrintHook
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
