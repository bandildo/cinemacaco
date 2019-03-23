export const environment = {
  production: false,

  databaseURL:
    'https://firestore.googleapis.com/v1/projects/cinemacaco-app-dev/databases/(default)/documents',

  firebase: {
    apiKey: 'AIzaSyCtJSWadwot-Q__-KUlmz1VcbjiNElwFZU',
    authDomain: 'cinemacaco-app-dev.firebaseapp.com',
    databaseURL: 'https://cinemacaco-app-dev.firebaseio.com',
    projectId: 'cinemacaco-app-dev',
    storageBucket: 'cinemacaco-app-dev.appspot.com',
    messagingSenderId: '501369049289'
  },

  users: {
    admin: { id: 'b61811c5-6996-4372-b69e-989330324ec1' }
  }
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
