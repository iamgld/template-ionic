// Angular Imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'
import { environment } from '@environment'
// This Module Imports
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
// Ionic Imports
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
// Store Imports
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { reducers, metaReducers } from '@store/reducers'
import { effects } from '@store/effects'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		IonicModule.forRoot(),
		// Store (NGRX)
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot(effects),
		StoreDevtoolsModule.instrument({
			name: 'ionic Template Store',
			maxAge: 25,
			logOnly: environment.production,
			autoPause: true,
		}),
	],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {}
