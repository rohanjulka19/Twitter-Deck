import firebase from 'firebase'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyCIHa6cubQ8-8FJEc00yyBuT9xQF9l4GY0",
    authDomain: "twitter-deck-808a6.firebaseapp.com",
  })
export let twitter_provider = new firebase.auth.TwitterAuthProvider();
twitter_provider.setCustomParameters({
    force_login : true ,
    screen_name:"" 
})

export let auth_handler =  firebase.auth()

