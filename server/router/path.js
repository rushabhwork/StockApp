const { json } = require("express");
const express = require("express");
const router = express.Router();
// const yahooFinance = require('yahoo-finance2');
const yahooFinance = require("yahoo-finance2").default;
const axios = require("axios").default;

const objData = require("../objdata");

//  -----------------------IIFY function -----------------------

let userStock;
let userStockCode;
router.all("/leftBar", async (req, res) => {
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
    console.log(result)
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
        eps *
        (7 + results.earningsHistory.history[3].epsEstimate) *
        (5.4 / 6.06);
      leftBarJsonData.push({ IntrencisVal: IntrencisVal });
      // console.log( results)
    } else {
      leftBarJsonData.push({ IntrencisVal: "nodata" });
    }
    userStockCode = "";
    // ============Sending responce Data===========
    res.send(JSON.stringify(leftBarJsonData));

});

// --------------------POST---------------
router.post("/stockName", async (req, res) => {
  try {
    userStock = req.body.stockName;
    let fetchStockList = {};
    let arr = [];

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
  } catch (error) {
    throw error;
  }
});

// -------------Stock Price Graph Api------------

router.get("/stockPriceGraph", async (req, res) => {
  // userStock = req.body.stockName;

  try {
    let xyAxisSata = [];

    let query = "";

    if (userStockCode) {
      query = userStockCode;
    } else {
      query = "AAPL";
    }
    const queryOptions = { period1: "2021-09-20" /* ... */ };
    const result = await yahooFinance._chart(query, queryOptions);

    result.quotes.map((val) => {
      let myDate = new Date(`${val.date}`);
      let miliSecDate = myDate.getTime();
      xyAxisSata.push([miliSecDate, val.high]);
    });

    res.send(xyAxisSata);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
