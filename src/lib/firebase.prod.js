import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyBn96o_6m3Yhk2hL0uO_t86BBe3zcYiPVE",
  authDomain: "netflix-clone-react-f7f22.firebaseapp.com",
  projectId: "netflix-clone-react-f7f22",
  storageBucket: "netflix-clone-react-f7f22.appspot.com",
  messagingSenderId: "460778649043",
  appId: "1:460778649043:web:0129f49580d10049ddab26",
};

const firebase = initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
