import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore(initializeApp);

export default db;
