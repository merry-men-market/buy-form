// const Pool = require('pg').Pool

// const stock = new Pool({
//   user: 'Jonathan',
//   database: 'stockbuyform',
//   port: 5432
// })

// function getRandomIndex(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// const doTenQueries = () => {
//   let t0 = Date.now();
//   // run 10 queries
//   let i = 0
//   while (i < 1) {
//     const id = 5
//     stock.query(`SELECT * FROM stock WHERE id = ${id}`, (error, results) => {
//       if (error) {
//         throw error
//       }
//       i += 1;
//       if (i === 1) {
//         let t1 = Date.now();
//         console.log('MS it took to run 10 queries: ', t1 - t0);
//         console.log(results);
//       }
//     })
//   }
//   return 'Done with query!'
// }

// doTenQueries();