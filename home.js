const categoriesContainer = document.querySelector('.food-categories');
const restaurantContainer = document.querySelector('.restaurant-container');

// create food categories slider
const foodCategories = [
  { name: 'Italien 🍕', backgroundColor: '#FEED58' },
  { name: 'Vegan 🍃', backgroundColor: '#7DED89' },
  { name: 'Sushi 🍣', backgroundColor: '#FF9595' },
  { name: 'Burger 🍔', backgroundColor: '#FFB94F' },
  { name: 'Brunch 🥞', backgroundColor: '#9BCFFF' },
  { name: 'Thaï 🍛', backgroundColor: '#CD995C' },
];

for (let i = 0; i < foodCategories.length; i++) {
  const buttonCategories = document.createElement('div');
  const titleCategories = document.createElement('p');
  buttonCategories.classList.add('btn-categories');
  titleCategories.innerHTML = foodCategories[i].name;
  buttonCategories.style.backgroundColor = foodCategories[i].backgroundColor;
  categoriesContainer.appendChild(buttonCategories);
  buttonCategories.appendChild(titleCategories);
}

// create restaurant slider
const restaurants = [
  {
    name: "L'effet mer",
    description:
      'Les équipes vous proposent de voyager en Italie, à travers une carte riche où vous retrouverez des pizzas, des pâtes, des salades... il y en a pour tous les goûts.',
    address: '280 Boulevard Alfred Daney',
    phone: '05 56 04 00 04',
    distance: '600m',
    rating: 4.3,
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
    favourites: false,
    typeOfFood: ['pizzas', 'pâtes', 'lasagne', 'burrata'],
    category: 'Italien 🍕',
  },
  {
    name: 'Papadum Indian',
    description: "Chez Papadum, nous souhaitons vous faire voyager dans ce pays avec notre cuisine d'inspiration indienne.",
    address: '121 Rue Lucien Faure',
    phone: '05 56 36 20 78',
    distance: '450m',
    rating: 4.1,
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
    favourites: false,
    typeOfFood: ['curry', 'naan', 'dahl', 'tikka massala'],
  },
  {
    name: 'Le Bureau',
    description: "Au Bureau rythme votre journée du matin jusqu'au soir : repas entre amis, apéro, sport, musique, danse… vous allez aimer passer du temps Au Bureau !",
    address: '12 Quai Virginie Hériot',
    phone: '05 57 02 75 93',
    distance: '700m',
    rating: 3.9,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1599&q=80',
    favourites: false,
    typeOfFood: ['burgers', 'salades', 'tartare', 'croque-monsieur'],
  },
  {
    name: 'Su & Shi',
    description: `Nous proposons des spécialités japonaises froides et chaudes, élaborées à partir de produits frais et locaux.`,
    address: '59 Rue Lucien Faure',
    phone: '08 26 30 03 06',
    distance: '800m',
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    favourites: false,
    typeOfFood: ['maki', 'poke', 'japonais', 'sushis'],
  },
  {
    name: `McDonald's`,
    description: `Des Menus variés pour le plaisir des petits et des grands dans votre McDonald's™. Venez Comme Vous Êtes.`,
    address: 'Port Autonome, Place de Latule, Bd Alfred Daney',
    phone: '05 57 19 11 87',
    distance: '200m',
    rating: 3.2,
    img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    favourites: false,
    typeOfFood: ['burgers', 'wraps', 'nuggets', 'potatoes'],
  },
  {
    name: `Eat Salad`,
    description: `Créez la salade de vos envies chez Eat Salad! Nous composons sous vos yeux votre salade sur-mesure, servie froide ou chaude.`,
    address: '51 Rue Lucien Faure',
    phone: '09 69 36 77 10',
    distance: '1km',
    rating: 4.2,
    img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80',
    favourites: false,
    typeOfFood: ['salades', 'poké', 'pâtes', 'légumes'],
  },
  {
    name: `Italian Trattoria`,
    description:
      'Les équipes vous proposent de voyager en Italie, à travers une carte riche où vous retrouverez des pizzas, des pâtes, des salades... il y en a pour tous les goûts.',
    address: '40 quai Virginie Heriot Bassins à Flot N°2',
    phone: '05 57 02 09 76',
    distance: '750m',
    rating: 4.2,
    img: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    favourites: false,
    typeOfFood: ['pizzas', 'pâtes', 'lasagne', 'burrata'],
  },
  {
    name: `Flam's`,
    description: `Prenez place dans notre restaurant pour déguster de délicieuses Flammekueches et autres spécialités alsaciennes.`,
    address: '17 Quai Virginie Hériot',
    phone: '05 57 02 10 15',
    distance: '850m',
    rating: 4.2,
    img: 'https://static.actu.fr/uploads/2021/02/flammekueche-gratuit-etudiants-paris-flams-solidarite.jpg',
    favourites: false,
    typeOfFood: ['alsacien', 'flammekueche', 'tartes', 'galettes'],
  },
];

for (let i = 0; i < restaurants.length; i++) {
  const restaurantCard = document.createElement('div');
  const cardHeader = document.createElement('div');
  const restaurantImg = document.createElement('img');
  const restaurantName = document.createElement('h3');
  const restaurantDescription = document.createElement('p');
  const restaurantDistance = document.createElement('p');
  const restaurantRating = document.createElement('p');
  const restaurantFavourites = document.createElement('div');
  const restaurantTypeOfFood = document.createElement('p');

  restaurantCard.classList.add('restaurant-card');
  cardHeader.classList.add('card-header');
  restaurantImg.classList.add('restaurant-img');
  restaurantName.classList.add('restaurant-name');
  restaurantDescription.classList.add('restaurant-description');
  restaurantDistance.classList.add('restaurant-distance');
  restaurantRating.classList.add('restaurant-rating');
  restaurantFavourites.classList.add('restaurant-favourites');
  restaurantTypeOfFood.classList.add('restaurant-type-of-food');

  restaurantImg.src = restaurants[i].img;
  restaurantName.innerHTML = restaurants[i].name;
  restaurantDescription.innerHTML = restaurants[i].description;
  restaurantDistance.innerHTML = `📍 ${restaurants[i].distance}`;
  restaurantRating.innerHTML = `⭐️ ${restaurants[i].rating}`;

  restaurantCard.appendChild(cardHeader);
  cardHeader.appendChild(restaurantImg);
  restaurantCard.appendChild(restaurantName);
  restaurantCard.appendChild(restaurantDescription);
  cardHeader.appendChild(restaurantDistance);
  cardHeader.appendChild(restaurantRating);
  restaurantCard.appendChild(restaurantFavourites);
  restaurantContainer.appendChild(restaurantCard);
}

const searchInput = document.querySelector('.input');

searchInput.addEventListener('keyup', restaurantFilter);

function restaurantFilter() {
  const filter = searchInput.value.toLowerCase();
  let restaurantCard = document.querySelectorAll('.restaurant-card');
  let restaurantName = document.querySelectorAll('.restaurant-name');

  for (let i = 0; i < restaurantCard.length; i++) {
    if (restaurantName[i].innerHTML.toLowerCase().indexOf(filter) > -1) {
      // IF THE VALUE MATCH, WE DO NOTHING
      restaurantCard[i].style.display = '';
    } else {
      restaurantCard[i].style.display = 'none';
    }
  }
}

const like = document.querySelectorAll('.restaurant-favourites');

for (let j = 0; j < like.length; j++) {
  let _likes = like[j];

  _likes.addEventListener('click', () => {
    _likes.classList.toggle('restaurant-favourites-full');
  });

  if (_likes.classList === 'restaurant-favourites-full') {
    restaurants[j].favourites = true;
    restaurantCard.classList.contains;
  } else {
    restaurants[j].favourites = false;
  }
}
