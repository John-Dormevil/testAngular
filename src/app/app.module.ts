import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroService } from './service/hero.service';
import { TestOneComponent } from './testone.component';
import { TestTwoComponent } from './testtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TestOneComponent,
    TestTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'one',
        component: TestOneComponent
      },
      {
        path: 'two',
        component: TestTwoComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
