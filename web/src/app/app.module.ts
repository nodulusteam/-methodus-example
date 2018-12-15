import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DynamicFormsBootstrapUIModule } from '@ng-dynamic-forms/ui-bootstrap';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { ModalModule, } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoadersCssModule } from 'angular2-loaders-css';
import { LoaderComponent } from './loader/loader.component';
import { ManageComponent } from './manage/manage.component';
import { UserController, UserModel } from '@example/client';
import { JwtModule } from '@auth0/angular-jwt';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.intercepter';

const config = new AuthServiceConfig([
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
  // },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('Facebook-App-Id')
  // },
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   provider: new LinkedInLoginProvider('LinkedIn-client-Id', false, 'en_US')
  // }
]);

export function provideConfig() {
  return config;
}

import * as M from '@methodus/client';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.context.service';
import { UserInfoComponent } from './user-info/user-info.component';

import { AdaptHeightDirective } from './directives/adapt-height';
import { OrderModule } from 'ngx-order-pipe';
import { SharedModule } from './shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './auth/auth-guard.service';
import { SignupComponent } from './signup/signup.component';
import { ScreensModule, ScreensComponent } from './screens/screens.module';
import { LibraryModule, libraryRoutes, MainComponent } from './library/library.module';

import { TimelinesComponent } from './timelines/timelines.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { SettingsComponent } from './settings/settings.component';
import { LanguageBarComponent } from './language-bar/language-bar.component';
import { DialogComponent } from './dialog/dialog.component';
import { LanguageService } from './language.service';
import { LibraryComponent } from './library/library.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService], children: [
      {
        path: '',
        component: TimelinesComponent,

      },
      {
        path: 'screens',
        component: ScreensComponent,

      }, {
        path: 'library', component: LibraryComponent,
        children: [...libraryRoutes]
      },

      {
        path: 'playlists',
        component: PlaylistsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'schedules',
        component: SchedulesComponent,

      },
      {
        path: 'settings',
        component: SettingsComponent,

      },
    ]
  },
  { path: 'user/details', component: UserInfoComponent },

  // { path: 'adscript/manage/create', component: AdScriptComponent },
  // { path: 'adscript/manage/:id/details', component: AdScriptComponent },
  // { path: 'adscript/edit/:id/details', component: FullEditorComponent },
  // { path: 'adscript/manage/:script_id/:embed_id/:id/spreadsheet', component: ResultViewerComponent },
  // { path: 'adscript/manage', component: ManageComponent },
  // {
  //   path: 'adscript/manage/:script_id/explore', component: ResultsExplorerComponent,
  //   children: [
  //     { path: ':result_id', component: ResultViewerComponent }
  //   ]
  // },
];
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({

  declarations: [
    AppComponent,
    LoaderComponent,
    ManageComponent,
    LoginComponent,
    UserInfoComponent,
    AdaptHeightDirective,
    DashboardComponent,
    SignupComponent,

    TimelinesComponent,
    PlaylistsComponent,
    SchedulesComponent,
    SettingsComponent,
    LanguageBarComponent,
    DialogComponent,
  ],
  imports: [

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true } // <-- debugging purposes only
    ),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    SortableModule.forRoot(),
    ToastrModule.forRoot(),
    LoadersCssModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    DynamicFormsBootstrapUIModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    ScreensModule,
    LibraryModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [UserService, LanguageService, AuthGuardService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
