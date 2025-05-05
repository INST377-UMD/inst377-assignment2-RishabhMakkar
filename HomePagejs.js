function getQuote() {
    fetch('https://zenquotes.io/api/random')
    .then(result => result.json())
    .then(resultJson => {
       // let listQuotes = [] 
        //let listAuthors =[]
               
       resultJson.forEach(resultObject => {
         //   listQuotes.push(resultObject['q']);
          //  listQuotes.push(resultObject['a']);
            
            //console.log(listQuotes)

            
            // console.log(booksTable)
           // console.log(resultObject['q'])
            getQuoteName = resultObject['q']
            //console.log(resultObject['a'])
            getAuthor = resultObject['a']
            console.log(getQuoteName)
            document.getElementById("insertQuote").innerHTML = '"' + getQuoteName + '"'
            document.getElementById("insertAuthor").innerHTML = getAuthor
           
        });

       // let selectQuote = listQuotes[Math.floor(Math.random() * listQuotes.length)];
        //console.log(selectQuote)
        
    //    });   
})
}
/*
function loadInstructions () {
  instructionsContainer = document.createElement('div')
  instructionsContainerText = document.createElement('p')
  instructionsContainer.id="instructionsContainerID"
  console.log(instructionsContainer)
  instructionsContainerText.innerHTML="Instructions"
  console.log(instructionsContainerText)
  instructionsContainer.appendChild(instructionsContainerText)
  document.body.appendChild(instructionsContainer);
  

  const audioButton = document.createElement("button");
  audioButton.id = "audioButtonID"
  console.log(audioButton)
  audioButton.setAttribute("style", "background-color:red;");
  console.log(audioButton)
  audioButton.innerHTML="Turn on Audio"
  document.getElementById("instructionsContainerID").appendChild(audioButton);
  
  audioButton.onclick= function() {
   annyang.start();
  }

  const audioButtonOff = document.createElement("button");
  audioButtonOff.id = "audioButtonOffID"
  console.log(audioButtonOff)
  audioButtonOff.setAttribute("style", "background-color:red;");
  console.log(audioButtonOff)
  audioButtonOff.innerHTML="Turn off Audio"
  document.getElementById("instructionsContainerID").appendChild(audioButtonOff);
  
 audioButtonOff.onclick= function() {
    annyang.abort();
  }


}
  */

function loadAudioOnButton() {
  annyang.start()


}
function loadAudioOffbutton() {
  annyang.abort()


}


window.onload=getQuote()
//window.onload=loadInstructions()