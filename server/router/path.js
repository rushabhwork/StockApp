const { json } = require('express');
const express = require('express');
const router = express.Router()
// const yahooFinance = require('yahoo-finance2');
const yahooFinance = require('yahoo-finance2').default;
const axios = require('axios').default;

const objData = require('../objdata')

 //  -----------------------IIFY function -----------------------



router.get('/leftBar', async (req, res) => {
    let leftBarJsonData = []

    // ======METHOD 2 YAHOOFINANCE2 =====================

    const results = await yahooFinance.quoteSummary("INFY.NS", {
        // 1. Try adding, removing or changing modules
        // You'll get suggestions after typing first quote mark (")
        modules: ["price", "financialData", "earningsHistory", "balanceSheetHistory"]
    });

    //    -------------EPS Calculation for left list------------
    let eps = 0
    if (results.earningsHistory) {
        results.earningsHistory.history.map((curVal) => {
            eps = eps + curVal.epsActual;
        });
        leftBarJsonData.push({ "EPS": eps })
    } else {
        leftBarJsonData.push({ "eps": "nodata" })
    }

    //    -------------IntrencisVal Calculation for lrft list------------
    if (results.earningsHistory && eps) {
        let IntrencisVal = eps * (7 + results.earningsHistory.history[3].epsEstimate) * (5.4 / 6.06)
        leftBarJsonData.push({ "IntrencisVal": IntrencisVal })
        // console.log( results)
    } else { leftBarJsonData.push({ "IntrencisVal": "nodata" }) }

    // =========================Sending responce Data===========================
    res.send(JSON.stringify(leftBarJsonData));


});


router.post("/stockName", async(req,res)=>{

let userStock = req.body.stockName

let fetchStockList = {}
let arr =[]
// console.log(userStock)

for(let item in objData.objdata){

    // console.log(userStock)
    let i = item.toLowerCase()

    if(i.includes(userStock) && userStock != ""){
         fetchStockList[item]=objData.objdata[item]
      }
      console.log(arr , item) 
}
res.send(fetchStockList)

});



module.exports = router;