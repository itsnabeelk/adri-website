import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CareerComponent } from './pages/career/career.component';
import { CareerInnerComponent } from './pages/career/career-inner/career-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PreLoaderComponent,
    HomeComponent,
    FaqComponent,
    TermsComponent,
    PrivacyComponent,
    CareerComponent,
    CareerInnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  ngOnInit(): void {
  }
}
