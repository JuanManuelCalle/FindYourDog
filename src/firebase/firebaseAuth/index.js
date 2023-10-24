/**
 * Importaciones para hacer conexion con Realtime database
 * Haciendo conexion con firebase autentication 
 * */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/** 
 * 
 * Configuracion de firebase
*/

const firebaseConfig = {
  apiKey: "AIzaSyCiEymFXEAFvrch0hC-D17aX6HJSEgp-rY",
  authDomain: "finddog-87ba8.firebaseapp.com",
  databaseURL: "https://finddog-87ba8-default-rtdb.firebaseio.com",
  projectId: "finddog-87ba8",
  storageBucket: "finddog-87ba8.appspot.com",
  messagingSenderId: "672932303235",
  appId: "1:672932303235:web:279d5787e93ed48cb1a6b6"
};

/* Exportaciones para hacer uso de firebase */

export const app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(app);