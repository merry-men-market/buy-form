const Faker = require('faker');
const fs = require('file-system');

const companyData = [{
    ticker: 'SNAP',
    company: 'Snap'
  },
  {
    ticker: 'TSLA',
    company: 'Tesla'
  },
  {
    ticker: 'AMZN',
    company: 'Amazon'
  },
  {
    ticker: 'TWTR',
    company: 'Twitter'
  },
  {
    ticker: 'BABA',
    company: 'Alibaba'
  },
  {
    ticker: 'BAC',
    company: 'Bank of America'
  },
  {
    ticker: 'NFLX',
    company: 'Netflix'
  },
  {
    ticker: 'NVDA',
    company: 'NVIDIA'
  },
  {
    ticker: 'DIS',
    company: 'Disney'
  },
  {
    ticker: 'PLUG',
    company: 'Plug Power'
  },
  {
    ticker: 'SQ',
    company: 'Square'
  },
  {
    ticker: 'ZNGA',
    company: 'Zynga'
  },
  {
    ticker: 'CHK',
    company: 'Chesapeake Energy'
  },
  {
    ticker: 'NIO',
    company: 'NIO'
  },
  {
    ticker: 'T',
    company: 'AT&T'
  },
  {
    ticker: 'HEXO',
    company: 'Hexo'
  },
  {
    ticker: 'MU',
    company: 'Micron Technology'
  },
  {
    ticker: 'GRPN',
    company: 'Groupon'
  },
  {
    ticker: 'SBUX',
    company: 'Starbucks'
  },
  {
    ticker: 'APHA',
    company: 'Aphria'
  },
  {
    ticker: 'RAD',
    company: 'Rite Aid'
  },
  {
    ticker: 'SIRI',
    company: 'Sirius XM'
  },
  {
    ticker: 'ATVI',
    company: 'Activision Blizzard'
  },
  {
    ticker: 'NTDOY',
    company: 'Nintendo'
  },
  {
    ticker: 'NKE',
    company: 'Nike'
  },
  {
    ticker: 'INTC',
    company: 'Intel'
  },
  {
    ticker: 'IQ',
    company: 'iQIYI'
  },
  {
    ticker: 'VOO',
    company: 'Vanguard'
  },
  {
    ticker: 'S',
    company: 'Sprint'
  },
  {
    ticker: 'WFT',
    company: 'Weatherford'
  },
  {
    ticker: 'KO',
    company: 'Coca-Cola'
  },
  {
    ticker: 'BRK',
    company: 'Berkshire Hathaway'
  },
  {
    ticker: 'TLRY',
    company: 'Tilray'
  },
  {
    ticker: 'BA',
    company: 'Boeing'
  },
  {
    ticker: 'MJ',
    company: 'ETFMG Alternative Harvest'
  },
  {
    ticker: 'JD',
    company: 'JD.com'
  },
  {
    ticker: 'V',
    company: 'Visa'
  },
  {
    ticker: 'AUY',
    company: 'Yamana Gold'
  },
  {
    ticker: 'SPY',
    company: 'SPDR'
  },
  {
    ticker: 'GERN',
    company: 'Geron'
  },
  {
    ticker: 'PYPL',
    company: 'PayPal'
  },
  {
    ticker: 'TCEHY',
    company: 'Tencent'
  },
  {
    ticker: 'GOOGL',
    company: 'Alphabet'
  },
  {
    ticker: 'CSCO',
    company: 'Cisco'
  },
  {
    ticker: 'CRM',
    company: 'Salesforce'
  },
  {
    ticker: 'ROKU',
    company: 'Roku'
  },
  {
    ticker: 'CRBP',
    company: 'Corbus Pharmaceuticals'
  },
  {
    ticker: 'DBX',
    company: 'Dropbox'
  },
  {
    ticker: 'WMT',
    company: 'Walmart'
  },
  {
    ticker: 'JCP',
    company: 'J.C. Penney'
  },
  {
    ticker: 'GM',
    company: 'GM'
  },
  {
    ticker: 'VTI',
    company: 'Vanguard Total'
  },
  {
    ticker: 'BILI',
    company: 'Bilibili'
  },
  {
    ticker: 'NOK',
    company: 'Nokia'
  },
  {
    ticker: 'GLUU',
    company: 'Glu Mobile'
  },
  {
    ticker: 'VZ',
    company: 'Verizon'
  },
  {
    ticker: 'VSLR',
    company: 'Vivint Solar'
  },
  {
    ticker: 'SHOP',
    company: 'Shopify'
  },
  {
    ticker: 'CARA',
    company: 'Cara Therapeutics'
  },
  {
    ticker: 'SNE',
    company: 'Sony'
  },
  {
    ticker: 'PFE',
    company: 'Pfizer'
  },
  {
    ticker: 'ENPH',
    company: 'Enphase Energy'
  },
  {
    ticker: 'CVS',
    company: 'CVS'
  },
  {
    ticker: 'SPOT',
    company: 'Spotify'
  },
  {
    ticker: 'COST',
    company: 'Costco'
  },
  {
    ticker: 'TRXC',
    company: 'TransEnterix'
  },
  {
    ticker: 'TWLO',
    company: 'Twilio'
  },
  {
    ticker: 'PCG',
    company: 'PG&E'
  },
  {
    ticker: 'KHC',
    company: 'Kraft Foods'
  },
  {
    ticker: 'INSY',
    company: 'Insys Therapeutics'
  },
  {
    ticker: 'AKS',
    company: 'AK Steel'
  },
  {
    ticker: 'LUV',
    company: 'Southwest Airlines'
  },
  {
    ticker: 'CRSP',
    company: 'CRISPR'
  },
  {
    ticker: 'FDX',
    company: 'FeDex'
  },
  {
    ticker: 'VKTX',
    company: 'Viking Therapeutics'
  },
  {
    ticker: 'JPM',
    company: 'JPMorgan Chase'
  },
  {
    ticker: 'DNR',
    company: 'Denbury'
  },
  {
    ticker: 'SPWR',
    company: 'SunPower'
  },
  {
    ticker: 'UAA',
    company: 'Under Armour'
  },
  {
    ticker: 'BOTZ',
    company: 'Global X Robotics & Artificial Intelligence ETF'
  },
  {
    ticker: 'SFIX',
    company: 'Stitch Fix'
  },
  {
    ticker: 'AMAT',
    company: 'Applied Materials'
  },
  {
    ticker: 'YETI',
    company: 'YETI'
  },
  {
    ticker: 'EA',
    company: 'EA'
  },
  {
    ticker: 'QCOM',
    company: 'Qualcomm'
  },
  {
    ticker: 'TGT',
    company: 'Target'
  },
  {
    ticker: 'TEVA',
    company: 'Teva Pharmaceutical'
  },
  {
    ticker: 'JNJ',
    company: 'Johnson & Johnson'
  },
  {
    ticker: 'IIPR',
    company: 'Innovative Industrial Properties'
  },
  {
    ticker: 'ACB',
    company: 'Aurora Cannabis'
  },
  {
    ticker: 'GE',
    company: 'GE'
  },
  {
    ticker: 'AAPL',
    company: 'Apple'
  },
  {
    ticker: 'F',
    company: 'Ford'
  },
  {
    ticker: 'CRON',
    company: 'Cronos Group'
  },
  {
    ticker: 'MSFT',
    company: 'Microsoft'
  },
  {
    ticker: 'GPRO',
    company: 'GoPro'
  },
  {
    ticker: 'FIT',
    company: 'Fitbit'
  },
  {
    ticker: 'AMD',
    company: 'AMD'
  },
  {
    ticker: 'FB',
    company: 'Facebook'
  },
  {
    ticker: 'CGC',
    company: 'Canopy Growth'
  }
];

let writer = fs.createWriteStream(__dirname + '/datafile.csv');

function changeObjectToCSV(object) {
  let values = Object.values(object)
  let string = '';
  for (let i = 0; i < values.length; i++) {
    if (i === values.length - 1) {
      string += `${values[i]}`
    } else {
      string += `${values[i]},`
    }
  }
  return string;
}

// function changeObjectToCSVFirstLine(object) {
//   let keys = Object.keys(object)
//   let string = '';
//   for (let i = 0; i < keys.length; i++) {
//     if (i === keys.length - 1) {
//       string += keys[i]
//     } else {
//       string += (keys[i] + ',')
//     }
//   }
//   return string;
// }

function writeOneMillionTimes(writer, encoding, callback) {
  let i = 10;

  function write() {
    let ok = true;
    do {
      var price = Faker.finance.amount(10.00, 400.00)
      var randomIdx = Math.floor(Math.random() * 100);
      let stock = {
        id: i,
        name: companyData[randomIdx].company,
        ticker: companyData[randomIdx].ticker + i,
        currentPrice: price,
      }
      stock = changeObjectToCSV(stock);
      // stock = JSON.stringify(stock);
      i--;
      if (i === 0) {
        // last time!
        writer.write(`${stock}\n`, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(`${stock}\n`, encoding);
      }
    }
    while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeOneMillionTimes(writer, 'utf8', () => console.log('completed the file write'))

// for (var i = 1; i < 10; i++) {
//   var price = Faker.finance.amount(10.00, 400.00)
//   var randomIdx = Math.floor(Math.random() * 100);
//   let stock = {
//     id: i,
//     name: companyData[randomIdx].company,
//     ticker: companyData[randomIdx].ticker + i,
//     currentPrice: price,
//   }
//   console.log(stock);
// }