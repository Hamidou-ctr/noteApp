import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'noteapp-ddba3',
          appId: '1:871307724963:web:72f98934578c9f4242d716',
          storageBucket: 'noteapp-ddba3.firebasestorage.app',
          apiKey: 'AIzaSyDVja9mMNduGGrBK5GZDfrueR0fwch7R0s',
          authDomain: 'noteapp-ddba3.firebaseapp.com',
          messagingSenderId: '871307724963',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
