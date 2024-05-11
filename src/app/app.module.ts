import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CurrencyPlnPipe } from './pipes/currency-pln.pipe';
import { PhoneComponent } from './phone/phone.component';
import { PhonePipe } from './pipes/phone.pipe';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { ZipcodePipe } from './pipes/zipcode.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CurrencyPlnPipe,
    PhoneComponent,
    PhonePipe,
    ZipcodeComponent,
    ZipcodePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
