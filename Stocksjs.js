//let myChart;
function getTicker() {
  //  document.getElementById('myChart').style.display = 'none';
    const d = new Date();
    console.log("hi")
    const userSelectedTicker = document.getElementById('enterTicker').value;
    const userSelectedDays = document.getElementById('selectDays').value;
    const numDays = userSelectedDays.replace(" days", "");
    //console.log(userSelectedDays)
   // console.log(numDays)
    const numberDays = Number(numDays)
    //console.log(numberDays)

    console.log(d)

    d_miliseconds = d.getTime()
   // console.log(d_miliseconds)
  //  console.log(d-30)
    test = d.setDate(d.getDate() - numberDays);
   // console.log(test)
   // console.log(userSelectedTicker)
    const stockPricesCharts = [];
    const dateChartArray = [];

  //  d_day_date = d.getDate()
  //  console.log(d_day_date-30)
    fetch(`https://api.polygon.io/v2/aggs/ticker/${userSelectedTicker}/range/1/day/${test}/${d_miliseconds}?adjusted=true&sort=asc&limit=120&apiKey=2ry8prtnX3BWXpmtFeP_AOJwSqB3QDfn`)
   .then(result => result.json())
   .then(resultJson => {
       console.log(resultJson.results)
       resultJson.results.forEach(resultObject=> {
        //console.log(resultObject['c'])
        stockPricesCharts.push(resultObject['c'])
        //console.log(resultObject['t'])

       var dateForChart = new Date(resultObject['t']);
       //console.log(dateForChart)
       //console.log(dateForChart.toGMTString())
       dateChartArray.push(dateForChart.toGMTString())
       });
  console.log(stockPricesCharts)
  console.log(dateChartArray)
  

  
  const ctx = document.getElementById('myChart');
  if (myChart) {
    myChart.destroy()
  } 
  myChart = new Chart(ctx, {
    
    type: 'line',
    data: {
     
      labels: dateChartArray,
      datasets: [{
        label: 'Stock Price',
        data: stockPricesCharts,
        
      }]
    },
  });

})
}


function getRedditStocks() {
    const d = new Date();
    console.log(d)
    d_year = d.getFullYear();
    d_month = d.getMonth()+1;
    d_daynumber = d.getDate();
    console.log(d_year)
    console.log(d_month)
    console.log(d_daynumber)
    console.log(d)
    dateFormat=(d_year+"-"+d_month+"-"+d_daynumber)
    console.log(dateFormat)
    fetch(`https://tradestie.com/api/v1/apps/reddit?date=${dateFormat}`)
   .then(result => result.json())
   .then(resultJson => {
    resultJson.length=5
    console.log(resultJson)
    const stocksTable = document.getElementById('stocksTable');
    const tableHeadTicker=document.createElement('th')
    tableHeadTicker.innerHTML="Ticker"
    stocksTable.appendChild(tableHeadTicker)

    const tableHeadComments=document.createElement('th')
    tableHeadComments.innerHTML="Comments"
    stocksTable.appendChild(tableHeadComments)

    const tableHeadImages=document.createElement('th')
    tableHeadImages.innerHTML="Sentiment"
    stocksTable.appendChild(tableHeadImages)

    
    resultJson.forEach(resultObject => {
        //resultObject.length=5
        //console.log(resultObject)
        //console.log(resultObject.isArray())

        const tableRow = document.createElement('tr');
        const tickerColumn = document.createElement('td');
        const commentsColumn = document.createElement('td');
        //const sentientColumn = document.createElement('td');
        const imageColumn = document.createElement('td');
        const addingImage = document.createElement('img');
        addingImage.id = "stockImage"

        const addLinkTicker = document.createElement('a') 
       // console.log(resultObject[""])
        //tickerColumn.innerHTML = resultObject["ticker"]; 
        const resultObjectTicker = resultObject["ticker"];
       // console.log(resultObjectTicker)
        addLinkTicker.href= `https://finance.yahoo.com/quote/${resultObjectTicker} `
        addLinkTicker.innerText=resultObject["ticker"];
        tickerColumn.appendChild(addLinkTicker)

        
        commentsColumn.innerHTML = resultObject["no_of_comments"];
       // sentientColumn.innerHTML = resultObject["sentiment"]
        tableRow.appendChild(tickerColumn);
        tableRow.appendChild(commentsColumn);
        //tableRow.appendChild(sentientColumn);

        if (resultObject["sentiment"]=="Bearish") {
            addingImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjsZvLzuHpPyV53j9biY6Zcw6vO_p-8_w-w&s";
            imageColumn.appendChild(addingImage);
            tableRow.appendChild(imageColumn)

        } else {
            addingImage.src = "https://www.investopedia.com/thmb/Vd2KeN5n6lo7-dUiL54_SJwE4mw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bullmarket-7f3819ca29c7406b9b5ca59ec65a8268.jpg";
            imageColumn.appendChild(addingImage);
            tableRow.appendChild(imageColumn)
        }
      

        stocksTable.append(tableRow);
        console.log(stocksTable)

        

       // console.log(resultObject)
  
   })
  




})
}


function getStockTickerAudio() {
    const d = new Date();
    const userSelectedTicker = document.getElementById('enterTicker').value;
    d_miliseconds = d.getTime()
    test = d.setDate(d.getDate() - 30);
    console.log(test)

    const stockPricesCharts = [];
    const dateChartArray = [];

    console.log(userSelectedTicker)
    fetch(`https://api.polygon.io/v2/aggs/ticker/${userSelectedTicker}/range/1/day/${test}/${d_miliseconds}?adjusted=true&sort=asc&limit=120&apiKey=2ry8prtnX3BWXpmtFeP_AOJwSqB3QDfn`)
   .then(result => result.json())
   .then(resultJson => {
    console.log(resultJson)

    console.log(resultJson.results)
       resultJson.results.forEach(resultObject=> {
        //console.log(resultObject['c'])
        stockPricesCharts.push(resultObject['c'])
        //console.log(resultObject['t'])

       var dateForChart = new Date(resultObject['t']);
       //console.log(dateForChart)
       //console.log(dateForChart.toGMTString())
       dateChartArray.push(dateForChart.toGMTString())
       });
  console.log(stockPricesCharts)
  console.log(dateChartArray)

  const ctx = document.getElementById('myChart');
  if (myChart) {
    myChart.destroy()
  } 
  myChart = new Chart(ctx, {
    
    type: 'line',
    data: {
      labels: dateChartArray,
      datasets: [{
       // label: '# of Votes',
        data: stockPricesCharts,
        
      }]
    },
  });

})

}

function loadAudioOnButton() {
    annyang.start()


}
function loadAudioOffbutton() {
    annyang.abort()


}
  
  window.onload = getRedditStocks()
 




