const Queue = require('./queue');

const getID = (title) => {
    return title[16];
}

const classifyEmployee = (employees,element) => {
    employees[getID(element)].push(element)
}

const getSeconds = (chunk) => {
    return parseInt(chunk.substring(0, 2)) * 3600 +
        parseInt(chunk.substring(2, 4)) * 60 +
        parseInt(chunk.substring(4, 6))
}

const comparator = (a, b) => {
    let hint = a.search('-') + 1;
    let time_a = a.substring(hint, hint + 6);
    let time_b = b.substring(hint, hint + 6);
    //console.log(`${time_a}, ${time_b} :${getSeconds(time_a, time_b)}`);
    return getSeconds(time_a) - getSeconds(time_b);
}


async function classifier(imgStream) {
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
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function genRandomImgs(nbImg) {
    
    for (let index = 0; index < nbImg; index++) {
        let rand = Math.floor(Math.random() * 4);
        
    }
}

module.exports = {
    getID,
    classifyEmployee,
    comparator,
    classifier,
    getSeconds
}