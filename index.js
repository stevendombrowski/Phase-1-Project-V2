// let myObj = { 
//    "dogs": [
//     {
//         "dogName":"Max",
//         "dogBreed":"Corgi",
//         "dogImg":"<img src='https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>",

//     },
//     {
//         "dogName":"Spike",
//         "dogBreed":"Daschund Mix",
//         "dogImg":"<img src='https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'>"
//     },
//      {
//         "dogName":"Lizze",
//         "dogBreed":"Wiener Dog",
//         "dogImg":"<img src='https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'> "
//     },
//     {
//         "dogName":"Alex",
//         "dogBreed":"Austrailan Sheperd Mix",
//         "dogImg":"<img src='https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>"
//     },
//     {
//         "dogName":"Miya",
//         "dogBreed":"Pug",
//         "dogImg":"<img src='https://images.pexels.com/photos/1289557/pexels-photo-1289557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>"
//     },
//     {
//         "dogName":"Marco",
//         "dogBreed":"Chihuhua Mix",
//         "dogImg":"<img src='https://images.pexels.com/photos/191353/pexels-photo-191353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>"
//     },
//     {
//         "dogName":"Bonnie",
//         "dogBreed":"Mix breed",
//         "dogImg":"<img src='https://images.pexels.com/photos/4201727/pexels-photo-4201727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>"
//     },
//     {
//         "dogName":"Poppy",
//         "dogBreed":"Unkown",
//         "dogImg":"<img src='https://images.pexels.com/photos/1458926/pexels-photo-1458926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>"
//     },
//     {
//         "dogName":"Kylo",
//         "dogBreed":"Shiba Inu",
//         "dogImg":"<img src='https://images.pexels.com/photos/4587979/pexels-photo-4587979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>"
//     }
// ],
    
   
    
// }
// console.log(myObj.dogs)
//   let output1 = document.getElementById("output1");



//  for(let x=0;x<myObj.dogs.length;x++){
//     let dog = myObj.dogs[x];
//     console.log(dog);
//     output1.innerHTML += dog.dogName + " " + dog.dogBreed + " "+ dog.dogImg +"<br>";
//  }


let http = new XMLHttpRequest();

http.open('get', 'dogs.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let dogs = JSON.parse(this.responseText);

        let output = "";

        for(let dog of dogs){
            output +=`
            <div class="dogs">
                <img src="${dog.dogImg}" class="dogImg">
               <div class="border"> 
                <p class ="title">Dog's Name:${dog.dogName}</p>
                <p class="description">Dog's Breed: ${dog.dogBreed}</p> 
                
               </div> 
            </div>`;
        }
        document.querySelector(".active").innerHTML = output;
    }
};


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})




function dark(){
    let element = document.body;
    element.classList.toggle("dark");
    
  }
  let body = document.querySelector('body');
  
  let toggle = document.getElementById('darkbutton');
  toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
  };


  const fetchDogBreeds = async () => {

    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    const dogBreeds = await response.json();
    populateDogSelect(dogBreeds);
  
  }
  
  const populateDogSelect = (breeds) => {
    const select = document.querySelector('.breed-select');
    const breedOptions = breeds.map(breed => {
      const option = document.createElement('option');
      option.text = breed.name;
      option.value = breed.id;
      return option;
  
    })
    breedOptions.forEach(breedOption => {
      select.appendChild(breedOption);
    })
  }
  
  const fillImage = (imageUrl) => {
    document.querySelector('#dogimage').setAttribute('src', imageUrl);
  }
  
  const getDogByBreed = async (breedId) => {
    const [data] = await fetch('https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=' + breedId).then((data) => data.json())
    const {url: imageUrl, breeds} = data;
    fillImage(imageUrl);
    
  
  }
  
  const changeDog = () => {
  
    console.log(event.target.value)
    getDogByBreed(event.target.value);
    
  }

  fetchDogBreeds()
  
