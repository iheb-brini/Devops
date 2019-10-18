const Queue = require('./queue');
const utitly = require('./utility')




const popImage = (queue, n = 1) => {
    let data = [];
    for (let i = 0;
        ((i < n) && (i <= queue.length)); i++) {
        data.push(queue.pop());
        /* data.push(queue.remove()); */
    }
    return data
};



const pushImage = (queue, image) => {
    queue.push(image);
    /* queue.add(image); */
};

const classifyPromise = new Promise((resolve, reject) => {
    /* DO SOME CALCULATION */
    person = Math.floor(Math.random() * 4 + 1);
    /*  */
    setTimeout(() => {
        resolve(person);
    }, 2000);
});

const classifyImage = (image) => {
    return new Promise((resolve, reject) => {
        /* DO SOME CALCULATIONS */
        //person = Math.floor(Math.random() * 4 + 1);
        
        setTimeout(() => {
            person = image;
            resolve(person);
        }, 3000);

        
        /*  */



    });
}

const getDataFromImage = (image) => {
    let hint = image.search('-') + 1;
    let time = image.substring(hint, hint + 6);
    return {'id':utitly.getID(image),'time':time};
};

const sortByDate = (queue) => {
    queue.sort(utitly.comparator);
    return queue;
};

const storeData = () => {};
const storeJunk = () => {};
const postData = () => {};


module.exports = {
    popImage,
    pushImage,
    classifyImage,
    getDataFromImage,
    sortByDate
}