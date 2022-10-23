// Angular Imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'
// This Module Imports
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
// Ionic Imports
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot()],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {}
