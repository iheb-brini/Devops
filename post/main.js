const fs = require('fs');
const Queue = require('./utils/queue');
const bag = require('./utils/utility');
const tools = require('./utils/tools');
const {
    exec
} = require('child_process');

var imgSteam = [];

const getImgs = () => exec('ls ./images/unclassified/ -1', (err, stdout, stderr) => {
    // the *entire* stdout and stderr (buffered)
    const files = stdout.trim();
    //console.log(`${stdout}`);
    let f = files.split('\n');
    imgSteam = f;
});

async function testImgs() {
    await getImgs();
    return new Promise((Resolve, Reject) => {
        setTimeout(() => {
            Resolve(imgSteam);
        }, 100);
    });

}




console.log(__dirname);


var A = new Array();
var B = new Array();

const employees = {
    'A': A,
    'B': B
};

/* GET DATA */
var imgStream2 = [
    "I07042019-082656A.jpg",
    "O07042019-082856A.jpg",
    "I07042019-082903A.jpg",
    "I07042019-082819B.jpg",
    "O07042019-083526B.jpg",
    "O07042019-094003A.jpg",
    "I07042019-092656A.jpg",
    "O07042019-092856A.jpg",
    "I07042019-092903A.jpg",
    "I07042019-092819B.jpg",
    "O07042019-093526B.jpg",
    "O07042019-104003A.jpg"
];


const firebase = require('./db');
const fire = new firebase.Fire();


/* PROCESS DATA */
async function classifier() {
    await imgStream.forEach(element => {
        tools.classifyImage(element)
            .then(async (val) => {
                await bag.classifyEmployee(employees, val);
            });

    });
}

async function gen(imgStream) {
    let promises = [];
    imgStream.forEach(element => {

        let test = tools.classifyImage(element)
            .then((val) => {
                bag.classifyEmployee(employees, val);
            });
        promises.push(test);
    });
    const pp = await Promise.all(promises);
    return pp;
}

async function test() {
    classifier();
}

const classifyAll = testImgs()
    .then((imgStream) => {
        //console.log(imgStream);

        gen(imgStream).then((val) => {
            //console.log(employees);
            A = A.sort(bag.comparator);
            B = B.sort(bag.comparator);

            A.forEach((element) => {
                //fire.db.doc('employee/A').collection('10-05-2019').add({'data':element})
                exec(`cp images/unclassified/${element} images/A`);
            })
            B.forEach(element => {
                //fire.db.doc('employee/B').collection('10-05-2019').add({'data':element})
                exec(`cp images/unclassified/${element} images/B`);
            })

            let lenA = A.length;
            let lenB = B.length;


            for (let index = 0; index < lenA / 2; index++) {
                let couple = tools.popImage(A, 2);

                let tl = (tools.getDataFromImage(couple[0]).time -
                    tools.getDataFromImage(couple[1]).time) % 60;
                fire.db.doc('employee/A').collection((new Date()).toDateString()).add({
                    'tl': tl
                })

            }

            for (let index = 0; index < lenB / 2; index++) {
                let couple = tools.popImage(B, 2);

                let tl = (tools.getDataFromImage(couple[0]).time -
                    tools.getDataFromImage(couple[1]).time) % 60;
                fire.db.doc('employee/B').collection((new Date()).toDateString()).add({
                    'tl': tl
                })
            }
            //console.log(A);
            //console.log(B);
        });
    })


console.log('just wait');

module.exports = {
    classifyAll
};