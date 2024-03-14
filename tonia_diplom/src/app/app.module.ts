import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { MainPageComponent } from './pages/main-page/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    MainPageComponent,
    HeaderComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
