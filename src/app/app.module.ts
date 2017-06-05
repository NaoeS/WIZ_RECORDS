// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DeckNewComponent } from './components/deck/new/deck-new.component';
import { DeckIndexComponent } from './components/deck/index/deck-index.component';
import { DeckEditComponent } from './components/deck/edit/deck-edit.component';
import { RecordNewComponent } from './components/record/new/record-new.component';
import { RecordIndexComponent } from './components/record/index/record-index.component';
import { RecordEditComponent } from './components/record/edit/record-edit.component';
import { Ng2DialogComponent } from 'ng2dialog/ng2-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeckNewComponent,
    DeckIndexComponent,
    DeckEditComponent,
    RecordNewComponent,
    RecordIndexComponent,
    RecordEditComponent,
    Ng2DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'deck/new', component: DeckNewComponent },
      { path: 'deck/index', component: DeckIndexComponent },
      { path: 'deck/edit/:id', component: DeckEditComponent },
      { path: 'record/new/:id', component: RecordNewComponent },
      { path: 'record/index', component: RecordIndexComponent },
      { path: 'record/edit/:id', component: RecordEditComponent
      }
    ], { useHash: true }),
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
