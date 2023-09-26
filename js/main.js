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

////////////////////////////////////////
// - Obtener la info
// - Crear un contenedor para perfil clase = profile
// - Crear elemento para user_name
// - "" "" para description 
// - "" "" age
///  - "" " " lista de bandas. --> iterar por cada banda

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}


const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        bands: [],
    }
    return userElements;
}

const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;
    userElements.bands.textContent = user.bands;

    const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('p');
        pElement.textContent = e;
        return pElement;
    })

    userElements.bands = bandList;
    return userElements;
}
/*
users.fav_music.bands.forEach(((band) => {
    const li= document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
}));
*/


const renderElements = (card, elements) => {
    card.append(elements.user_name, elements.age, elements.description, elements.bands);
}


users.forEach(user => {
    const card = createCard();
    const userElements = createDescription();

    const elementsWithData = populateElements(user, userElements);
    renderElements(card, elementsWithData);
    CARD_SECTION.append(card);

})


// Ejercicio
// 1. Agregar las bandas
// PUSH 
// EVITAR LAS BANDAS PARA EL EJERCICIO 2
// 2. Obtener la info del usuario desde inputs y mostrar en tarjetas
// Al menos deben tener 2 commits

const profileBtn = document.getElementById('ProfileBtn');

profileBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
})
