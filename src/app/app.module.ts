import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ModalModule, BsModalRef } from "ngx-bootstrap/modal";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LanguageService } from "./_services/language.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LanguageComponent } from "./components/navbar/language/language.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent, NavbarComponent, LanguageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [LanguageService, BsModalRef],
  entryComponents: [LanguageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
