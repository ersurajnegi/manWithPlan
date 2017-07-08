import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from './common/services/api.service';
import { ProfileComponent } from './components/profile/profile.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { GoalItemComponent } from './components/goal-item/goal-item.component';
import { CustomScrollerDirective } from './directives/customScroller/custom-scroller.directive';
import { LoaderDirective } from './directives/loader/loader.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GoalListComponent,
    GoalItemComponent,
    CustomScrollerDirective,
    LoaderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
