const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('animal-img');
const button = document.querySelector('.form-submit-button');


selectEl.addEventListener('change', function(){
    switch(true) {
        case this.value === 'dinosaur' : registrationImage.src = "./Assets/Animals.svg";
            break;
        case this.value === 'tolik' : registrationImage.src = "./Assets/Tolik.svg";
            break;
        case this.value === 'hamster' : registrationImage.src = "./Assets/hamster.svg";
            break;
        case this.value === 'bear' : registrationImage.src = "./Assets/bear.svg";
            break;
        case this.value === 'dog' : registrationImage.src = "./Assets/dog.svg";
            break;
    }
})