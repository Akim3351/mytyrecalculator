import { nanoid } from 'nanoid'

const disksEt = [];

for (let i = 150; i >= -150; i -= 0.5) {
    disksEt.push({
        id: nanoid(),
        et: i,
    })
};

// console.log(disksEt);

export default disksEt;