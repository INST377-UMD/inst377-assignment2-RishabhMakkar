function loadSlider() {
   

        fetch(`https://dog.ceo/api/breeds/image/random/10`)
        .then (result => result.json()) 
        .then (resultJson => {
            console.log(resultJson.message)
            resultJson.message.forEach(resultObject => {
                 //console.log(resultObject)
                 console.log(resultObject);
            
                 //listImages.push(resultJson)
                 const dogLoad = document.createElement('img');
                 dogLoad.id = "dogImage"
                 dogLoad.src = resultObject
                 console.log(dogLoad)
                 dogLoad.width=750
                 dogLoad.height=450
                 document.getElementById("loadingTheDogs").appendChild(dogLoad)
                 console.log(dogLoad)
            
            })
            simpleslider.getSlider()
               
            })           
        }


function getDogButtons() {
    fetch('https://dogapi.dog/api/v2/breeds')
    .then(result => result.json())
    .then(resultJson => {
       

        console.log(resultJson)
        
        console.log(resultJson.data)

       resultJson.data.forEach(resultObject => {
       
            const breedName = resultObject.attributes['name']
            console.log(breedName)
            const buttonPress = document.createElement("button");
            buttonPress.id = "buttonPressID"
            console.log(buttonPress)
            //buttonPress.setAttribute("style", "background-color:red;");
            console.log(buttonPress)
            buttonPress.innerHTML=breedName
            document.getElementById("loadingTheBreeds").appendChild(buttonPress);
            console.log(document.getElementById("loadingTheBreeds"))
            document.getElementById("loadingTheBreeds").appendChild(buttonPress)
            


           buttonPress.onclick= function() {

            //document.getElementById('loadingTheDogs').style.display = 'none';
            console.log(resultObject.attributes['name'])
            const breedContainer = document.createElement("div");
            breedContainer.id = "breedContainerID"
            if (document.contains(document.getElementById("breedContainerID"))) {
                document.getElementById("breedContainerID").remove();
            }
           
            //breedContainer.innerHTML= resultObject.attributes['description'] + resultObject.attributes['name']
            breedContainer.innerHTML= `Name: ${resultObject.attributes['name']} <br> Description: ${resultObject.attributes['description']} <br> Min Life: ${resultObject.attributes.life["min"]} <br> Max Life: ${resultObject.attributes.life["max"]}` 
            
            //document.getElementById('breedContainerID').display = 'none';
            //document.body.removeChild(breedContainer);
           // document.body.appendChild(breedContainer);
            //document.body.removeChild(breedContainer);
           // document.body.appendChild(breedContainer);
            document.getElementById("main-container").appendChild(breedContainer)
            
           }
          
          // 
            
             
    })
    console.log(document.getElementById("loadingTheBreeds"))
     
})

}

    function loadAudioOnButton() {
        annyang.start()


    }
    function loadAudioOffbutton() {
        annyang.abort()


    }

  
window.onload = loadSlider()


window.onload = getDogButtons()
//window.onload=loadInstructions3()
//window.onload = loadInstructions3()

//window.onload = getBreedInformation()
//window.onload = changeTheBreed()
//window.onload = getDogImage()