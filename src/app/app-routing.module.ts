import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareerComponent } from './pages/career/career.component';
import { CareerInnerComponent } from './pages/career/career-inner/career-inner.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { TranslatePriceComponent } from './pages/translate/translate-price/translate-price.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'about',
    component:AboutComponent,
  },
  {
    path: 'services',
    component:ServicesComponent,
  },
  {
    path: 'career',
    component:CareerComponent,
  },
  {
    path: 'career-inner',
    component:CareerInnerComponent,
  },
  {
    path: 'contact',
    component:ContactComponent,
  },
  {
    path: 'faq',
    component:FaqComponent,
  },
  {
    path: 'privacy',
    component:PrivacyComponent,
  },
  {
    path: 'terms',
    component:TermsComponent,
  },
  {
    path: 'translate',
    component:TranslateComponent,
  },
  {
    path: 'translate-price',
    component:TranslatePriceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
