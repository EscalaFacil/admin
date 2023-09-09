import { getFunctions, connectFunctionsEmulator, httpsCallable } from "firebase/functions";
import { initializeApp } from "firebase/app";


const projectId = 'escalafacil-3a421';

const app = initializeApp({ projectId });

const functions = getFunctions(app);

connectFunctionsEmulator(functions, "127.0.0.1", 5001);


export const helloWorld = httpsCallable(functions, "helloWorld");