var express = require("express");
var router = express.Router();

/* GET users listing. */
// console.log("test")


router.get("/", function (req, res, next) {
  // res.send('respond with a resource');
  // const dataToJson = require("data-to-json");
  // const dataInJSON = csvToJSON({ filePath: "./index.csv",  hasHeader: false, headers: ["FIRST_NAME", "LAST_NAME", "NUMBER", "EMAIL", "ADDRESS"] });
// console.log("get test")
//  const dataInJSON = dataToJson.csv({ filePath: "./index.csv" }).toJson()
// console.log("test", dataInJSON)
   const arr = [
    {
      Country: Argentina,
      Date: 2000-04-01,
      LocalPrice: 2.5,
      DollarEx: 2.88,
      DollarPrice: 3.24,
      DollarPPP: 1.503448275862069,
      DollarValuation: -49.03565166569258,
    },
    {
      Country: "USA",
      Date: 2001-04-01,
      LocalPrice: 2.5,
      DollarEx: 2.95,
      DollarPrice: 2.11,
      DollarPPP: 1.5129151291512914,
      DollarValuation: -47.46822468224682,
    },
    {
      Country: "Isrial",
      Date: "2002-04-01",
      LocalPrice: 2.5,
      DollarEx: 3.13,
      DollarPrice: 3.33,
      DollarPPP: 1.004016064257028,
      DollarValuation: -67.92280944865725,
    },
    {
      Country: "Mikah Topia",
      Date: 2003-04-01,
      LocalPrice: 4.1,
      DollarEx: 2.5,
      DollarPrice: 2.8,
      DollarPPP: 0.98425196850393,
      DollarValuation: -1.5748031496062964,
    },
    {
      Country: "England",
      Date: 2004-05-01,
      LocalPrice: 4.36,
      DollarEx:2.5,
      DollarPrice: 1.2,
      DollarPPP:0.9960159362549802,
      DollarValuation:-0.3984063745019806,
    },
  ];

 
  




  res.json(arr);
});

module.exports = router;