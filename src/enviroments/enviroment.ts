// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: "ot284-f386f",
    appId: "1:916014183122:web:ebe2404c2cdd8378a8b30b",
    storageBucket: "ot284-f386f.appspot.com",
    apiKey: "AIzaSyBB3Zw3cach_-XMeNDr-ZTvu6fXVrm6-Tg",
    authDomain: "ot284-f386f.firebaseapp.com",
    messagingSenderId: "916014183122",
  },
  production: false,
  endpoints: {
    product: {
      list: "http://localhost:3000/",
      create: "https://ongapi.alkemy.org/api/contacts",
      edit(id:number) {return `https://ongapi.alkemy.org/api/contacts/${id}`},
      delete(id:number) {return `https://ongapi.alkemy.org/api/contacts/${id}`}
    },
    novedades: {
      list: "https://ongapi.alkemy.org/api/news",
      detail(id: number) {
        return `https://ongapi.alkemy.org/api/news/${id}`;
      },
      create: "https://ongapi.alkemy.org/api/news",
      edit(id: number) {
        return `https://ongapi.alkemy.org/api/news/${id}`;
      },
      delete(id: number) {
        return `https://ongapi.alkemy.org/api/news/${id}`;
      },
    },
    actividades:{
      list:"https://ongapi.alkemy.org/api/activities",
      getById(id:number) {return `https://ongapi.alkemy.org/api/activities/${id}`},
      create:"https://ongapi.alkemy.org/api/activities",
      edit(id:number) {return `https://ongapi.alkemy.org/api/activities/${id}`},
      delete(id:number) {return `https://ongapi.alkemy.org/api/activities/${id}`}
    },
    testimonios: {
      list: "https://ongapi.alkemy.org/api/testimonials/",
      create: "https://ongapi.alkemy.org/api/testimonials/",
      edit: "https://ongapi.alkemy.org/api/testimonials/",
      delete: "https://ongapi.alkemy.org/api/testimonials/",
    },
    organization: {
      list: "https://ongapi.alkemy.org/api/organization",
      edit: "https://ongapi.alkemy.org/api/organization/",
      delete: "https://ongapi.alkemy.org/api/organization/",
      create: "https://ongapi.alkemy.org/api/organization",
    },
    miembros:{
      list: "https://ongapi.alkemy.org/api/members",
      getMiembro(id:number) {return `https://ongapi.alkemy.org/api/members/${id}`},
      create: "https://ongapi.alkemy.org/api/members",
      edit(id:number) {return `https://ongapi.alkemy.org/api/members/${id}`},
      delete(id:number) {return `https://ongapi.alkemy.org/api/members/${id}`}
    },
    categories: {
      list: "https://ongapi.alkemy.org/api/categories",
      create: "https://ongapi.alkemy.org/api/categories",
      edit: "https://ongapi.alkemy.org/api/categories",
      delete: "https://ongapi.alkemy.org/api/categories",
    },
  },
  url: "https://ongapi.alkemy.org/api/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
