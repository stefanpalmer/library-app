import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { NovelComponent } from './novel/novel.component';
import { AnthologyComponent } from './anthology/anthology.component';
import { LibraryComponent } from './library/library.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    HeaderComponent,
    NovelComponent,
    AnthologyComponent,
    LibraryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
