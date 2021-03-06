const img = document.querySelector('img');
const submitFormBtn=document.querySelector('[data-gif-btn]')
submitFormBtn.addEventListener('click',submitForm);

function submitForm(e){ //Take form inputs
  e.preventDefault();
  const gifValue = document.querySelector("[data-search]").value

  document.forms[0].reset(); //wipe form inputs
  getGif(gifValue)
}

//old syntax to handle APIs (which are promises)

// function getGif(value){
//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UF5VFsIKYq2eDsJIc0U0N9yziPKoIsPD&s=${value}`, {mode: 'cors'})
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             img.src = response.data.images.original.url;
//         })
//         .catch(function(error){
//             throw new Error(error);
//         })
// }

//async/await is syntactical sugar for promises, see below

async function getGif(value){
    try{
        const gifAPI = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UF5VFsIKYq2eDsJIc0U0N9yziPKoIsPD&s=${value}`, {mode: 'cors'})
        const gifData= await gifAPI.json();
        img.src = gifData.data.images.original.url;
    }catch(error){
        throw new Error(error);
    }
    
}