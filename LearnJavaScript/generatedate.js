
const moment = require('moment');

const start = moment('2026-01-01');
const end = moment('2026-12-31');

const randomDate = moment(
    start.valueOf() + Math.random() * (end.valueOf() - start.valueOf())
).format('YYYY-MM-DD');

console.log(randomDate); // Example: 2026-05-06