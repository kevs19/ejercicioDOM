const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const CARD_SECTION = document.getElementById('profiles');

const userInfo = (usuario) => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        bandsList: document.createElement('ul'),
        bands: []
    };
    userElements.user_name.textContent = usuario.user_name;
    userElements.age.textContent = usuario.age;
    userElements.description.textContent = usuario.description;
    usuario.fav_music.bands.forEach(band => {
        const liElement = document.createElement('li');
        liElement.textContent = band;
        userElements.bandsList.appendChild(liElement);
    });
    card.append(userElements.user_name, userElements.age, userElements.description, userElements.bandsList);
    return card;
}

users.forEach(user => {
    const card = userInfo(user);
    CARD_SECTION.appendChild(card);
})


// Ejercicio
// 1. Agregar las bandas
// PUSH 
// EVITAR LAS BANDAS PARA EL EJERCICIO 2
// 2. Obtener la info del usuario desde inputs y mostrar en tarjetas
// Al menos deben tener 2 commits

const newUser = (usuario) => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    const userElements = {
        userName: document.createElement('h2'),
        description: document.createElement('h3'),
        age: document.createElement('p')
    };
    userElements.userName.textContent = usuario.userName;
    userElements.description.textContent = usuario.description;
    userElements.age.textContent = usuario.age;

    card.append(userElements.userName, userElements.description, userElements.age);
    return card;
}


const addBTN = document.getElementById('profileBtn');
    addBTN.addEventListener('click', () => {
    const inputName = document.getElementById('name');
    const inputDescription = document.getElementById('description');
    const inputAge = document.getElementById('age');
    
    const newUser = {
        user_name: inputName.value,
        description: inputDescription.value,
        age: inputAge.value,
        
    };

    const newUserCard = newUserewUser(newUser);
    CARD_SECTION.appendChild(newUserCard);

    inputName.value = "";
    inputAge.value = "";
    inputEmail.value = "";

});