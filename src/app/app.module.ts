import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainService } from './service/main.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HighchartsChartModule
  ],
  providers: [ MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
