const { json } = require("express");
const express = require("express");
const router = express.Router();
// const yahooFinance = require('yahoo-finance2');
const yahooFinance = require("yahoo-finance2").default;
const axios = require("axios").default;

const objData = require("../objdata");

//  -----------------------IIFY function -----------------------

router.all("/leftBar", async (req, res) => {
  let userStockCode;
  if (req.body.compnyCode) {
    userStockCode = req.body.compnyCode;
  } else {
    userStockCode = "INFY";
  }
  let leftBarJsonData = [];

  // ======METHOD 2 YAHOOFINANCE2 =====================

  const results = await yahooFinance.quoteSummary(`${userStockCode}.NS`, {
    // 1. Try adding, removing or changing modules
    // You'll get suggestions after typing first quote mark (")
    modules: [
      "price",
      "financialData",
      "earningsHistory",
      "balanceSheetHistory",
    ],
  });

  //    -------------EPS Calculation for left list------------
  let eps = 0;
  if (results.earningsHistory) {
    results.earningsHistory.history.map((curVal) => {
      eps = eps + curVal.epsActual;
    });
    leftBarJsonData.push({ EPS: eps });
  } else {
    leftBarJsonData.push({ eps: "nodata" });
  }

  //    -------------IntrencisVal Calculation for lrft list------------
  if (results.earningsHistory && eps) {
    let IntrencisVal =
      eps * (7 + results.earningsHistory.history[3].epsEstimate) * (5.4 / 6.06);
    leftBarJsonData.push({ IntrencisVal: IntrencisVal });
    // console.log( results)
  } else {
    leftBarJsonData.push({ IntrencisVal: "nodata" });
  }

  userStockCode = "";
  // ============Sending responce Data===========
  res.send(JSON.stringify(leftBarJsonData));
});

router.post("/stockName", async (req, res) => {
  let userStock = req.body.stockName;
  let fetchStockList = {};
  let arr = [];
  console.log("userStock");

  for (let item in objData.objdata) {
    let i = item.toLowerCase();
    let searchstring = i.startsWith(userStock);

    if (i.includes(userStock) && userStock != "" && searchstring) {
      fetchStockList.companyName = item;
      fetchStockList.compnyCode = objData.objdata[item];
      //  fetchStockList[item]=objData.objdata[item];
      arr.push(fetchStockList);
      fetchStockList = {};
    }
  }
  res.send(arr);
});

module.exports = router;
