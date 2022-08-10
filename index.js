// JSON Data code
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

// Tabs code
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



// DarkMode Function
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

// Dog API Code
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
  
