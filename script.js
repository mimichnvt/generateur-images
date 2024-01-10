

// définitions des variables
var button = document.querySelector('button');
var image = document.querySelector('.container');

button.onclick = function (){
    // le lien de l'API
    let url = 'https://dog.ceo/api/breeds/image/random';

    // récupération des images

    fetch(url).then((response) =>
    response.json().then((data) => {
        //nouss allons insérer les images dans la boite image
        image.innerHTML = `<img src="${data.message}">`
    }))
}