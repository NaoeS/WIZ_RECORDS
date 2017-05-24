// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DeckNewComponent } from './components/deck/new/deck-new.component';
import { DeckIndexComponent } from './components/deck/index/deck-index.component';
import { DeckEditComponent } from './components/deck/edit/deck-edit.component';
import { RecordNewComponent } from './components/record/new/record-new.component';
import { RecordIndexComponent } from './components/record/index/record-index.component';
import { RecordEditComponent } from './components/record/edit/record-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeckNewComponent,
    DeckIndexComponent,
    DeckEditComponent,
    RecordNewComponent,
    RecordIndexComponent,
    RecordEditComponent
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
      { path: 'record/new', component: RecordNewComponent },
      { path: 'record/index', component: RecordIndexComponent },
      { path: 'record/edit/:id', component: RecordEditComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
