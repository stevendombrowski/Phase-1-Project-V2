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
                <img src="${dog.dogImg}">
                <p class ="title">${dog.dogName}</p>
                <p class="description">${dog.dogBreed}</p> 
                </div>`;
        }
        document.querySelector(".container").innerHTML = output;
    }
}