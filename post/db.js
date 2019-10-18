const config = {
    apiKey: "AIzaSyByNGfERX4JO6Ld2FEybUrCZ8GSE6v3Kb0",
    authDomain: "clarity-6cc80.firebaseapp.com",
    databaseURL: "https://clarity-6cc80.firebaseio.com",
    projectId: "clarity-6cc80",
    storageBucket: "clarity-6cc80.appspot.com",
    messagingSenderId: "256831111177"
};

const admin = require("firebase-admin");

const serviceAccount = require("./firebaseConfig.json");

/* admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://clarity-6cc80.firebaseio.com"
});


const db = admin.firestore();
db.collection('users').add({
    name: 'iheb',
    age: 22
}); */

class Fire {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://clarity-6cc80.firebaseio.com"
        });
        this.db = admin.firestore();
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

module.exports = {Fire};