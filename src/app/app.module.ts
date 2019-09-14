import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatButtonModule} from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent
 ],
 imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTreeModule, MatIconModule, MatButtonModule,
    FormsModule,
    ReactiveFormsModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
