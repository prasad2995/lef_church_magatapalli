import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Primary Firebase App for VBS
const firebaseConfig = {
  apiKey: "AIzaSyDOfENBl1a8mkAEZomt_D05okuEcPsgcPo",
  authDomain: "vbs-magatapalli-46600.firebaseapp.com",
  projectId: "vbs-magatapalli-46600",
  storageBucket: "vbs-magatapalli-46600.firebasestorage.app",
  messagingSenderId: "91676318303",
  appId: "1:91676318303:web:2130ad4da02e69fe8299ea"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Secondary Firebase App for Main Church Website (Prayer Requests)
const churchConfig = {
  apiKey: "AIzaSyDChKseRGUolPq1wYMLsgI7nG0fiw2jfUU",
  authDomain: "lef-church-magatapalli.firebaseapp.com",
  projectId: "lef-church-magatapalli",
  storageBucket: "lef-church-magatapalli.firebasestorage.app",
  messagingSenderId: "381152009664",
  appId: "1:381152009664:web:3cf33c5a4c35ff36a8bc25"
};

export const churchApp = initializeApp(churchConfig, "ChurchApp");
export const churchDb = getFirestore(churchApp);