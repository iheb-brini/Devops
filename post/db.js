import config from './environment/env';

import { initializeApp, credential as _credential, firestore } from "firebase-admin";

import serviceAccount from "./environment/firebaseConfig.json";



class Fire {
    constructor() {
        initializeApp({
            credential: _credential.cert(serviceAccount),
            databaseURL: config.databaseURL
        });
        this.db = firestore();
    }
    /* BASIC */
    addNode(node, data) {
        this.db.doc(node).set(data, {merge: true});
    }
    UpdateNode(node, newData) {
        this.db.doc(node).update(newData);
    }
    addPerson(name, data) {
        this.addNode('employee/' + name, data);
    }
    addInt(node,data){
        this.db.doc(node).add(data);
    }

    updataPerson(name, data) {
        this.UpdateNode('employee/' + name, data);
    }
}

export default {Fire};