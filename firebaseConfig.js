import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCAtlbceEa-qzjf7jdBs657ZT5tCdWA53w',
	authDomain: 'guesstheelo-437e4.firebaseapp.com',
	projectId: 'guesstheelo-437e4',
	storageBucket: 'guesstheelo-437e4.appspot.com',
	messagingSenderId: '471999041844',
	appId: '1:471999041844:web:6a38ce0f38904be4d95561',
	measurementId: 'G-9E9G2HQHQC',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
