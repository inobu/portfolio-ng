// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  amplify: {
    Auth: {
      identityPoolId: 'ap-northeast-1:734bbf7d-714d-4998-b879-4ba5f9f1c8ac',
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-1_q2p5UJbfA',
      userPoolWebClientId: '4ehbnu01458qut5ip8t2ftshs0'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
