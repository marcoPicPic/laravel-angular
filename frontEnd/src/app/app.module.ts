// app.module.ts
// Angular 2 imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { BlogComponent } from './blog/blog.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { routing } from "./app.routing";
import { QuoteService } from "./service/quote.service";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NowComponent } from './utils/now.component';
import { AuthService } from "./service/auth.service";
import { BlogService } from "./service/blog.service";
import { HeaderNavBar} from "./header-nav-bar.component"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavBar,
    BlogComponent,
    QuoteComponent,
    QuotesComponent,
    NewQuoteComponent,
    SignupComponent,
    SigninComponent,
    NowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [QuoteService, AuthService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
