import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDwvrZ6VU6YlM2HCYN2Y_NO7T_nXBA0bWQ",
	authDomain: "tntcw-1216b.firebaseapp.com",
	databaseURL: "https://tntcw-1216b.firebaseio.com",
	projectId: "tntcw-1216b",
	storageBucket: "tntcw-1216b.appspot.com",
	messagingSenderId: "240913317657"
};

export const firebaseApp = firebase.initializeApp(config);
/* Specify Reference to Database by defining a new Constant
 * firebase. --set the database to the name we defined above in line 1 "firebase"
 * .database --call the database module
 * .ref('goals) --define the reference key named 'goals'
*/
export const warrantyItemRef = firebase.database().ref('warrantyItems');
// export const warrantyItemInvoiceRef = firebase.database().ref('warrantyItems');
