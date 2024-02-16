import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './pages/index/title/title.component';

import { IndexModule } from './pages/index/index.module';
import { PortifolioModule } from './pages/portfolio/portifolio.module';
import { MenuComponent } from './shared/menu/menu.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortifolioModule,
    IndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
