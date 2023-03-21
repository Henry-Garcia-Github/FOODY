const categoriesContainer = document.querySelector(".food-categories")
const restaurantContainer = document.querySelector(".restaurant-container")

// create food categories slider
const foodCategories = [
    { name: "Italien 🍕", backgroundColor: '#FEED58' },
    { name: "Vegan 🍃", backgroundColor: '#7DED89' },
    { name: "Sushi 🍣", backgroundColor: '#FF9595' },
    { name: "Burger 🍔", backgroundColor: '#FFB94F' },
    { name: "Brunch 🥞", backgroundColor: '#9BCFFF' },
    { name: "Thaï 🍛", backgroundColor: '#CD995C' },
]

for (let i = 0; i < foodCategories.length; i++) {
    const buttonCategories = document.createElement("div");
    const titleCategories = document.createElement("p");
    buttonCategories.classList.add("btn-categories");
    titleCategories.innerHTML = foodCategories[i].name;
    buttonCategories.style.backgroundColor = foodCategories[i].backgroundColor;
    categoriesContainer.appendChild(buttonCategories);
    buttonCategories.appendChild(titleCategories);

}

// create restaurant slider
const restaurants = [
    {
        name: "L'effet mer",
        description: "Les équipes vous proposent de voyager en Italie, à travers une carte riche où vous retrouverez des pizzas, des pâtes, des salades... il y en a pour tous les goûts.",
        address: "280 Boulevard Alfred Daney",
        phone: "05 56 04 00 04",
        distance: "600m",
        rating: 4,
        img: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        favourites: false
    },
    {
        name: "Papadum Indian Food",
        description: "Chez Papadum, nous souhaitons vous faire voyager dans ce pays avec notre cuisine d'inspiration indienne.",
        address: "121 Rue Lucien Faure",
        phone: "05 56 36 20 78",
        distance: "450m",
        rating: 4,
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
        favourites: false
    },
    {
        name: "Le Bureau",
        description: "Au Bureau rythme votre journée du matin jusqu'au soir : repas entre amis, apéro, sport, musique, danse… vous allez aimer passer du temps Au Bureau !",
        address: "12 Quai Virginie Hériot",
        phone: "05 57 02 75 93",
        distance: "700m",
        rating: 4,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1599&q=80",
        favourites: false
    },
]

for (let i = 0; i < restaurants.length; i++) {
    const restaurantCard = document.createElement("div");
    restaurantCard.classList.add("restaurant-card");
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    const restaurantImg = document.createElement("img");
    restaurantImg.classList.add("restaurant-img");
    restaurantImg.src = restaurants[i].img;
    const restaurantName = document.createElement("h3");
    restaurantName.classList.add("restaurant-name");
    restaurantName.innerHTML = restaurants[i].name;
    const restaurantDescription = document.createElement("p");
    restaurantDescription.classList.add("restaurant-description");
    restaurantDescription.innerHTML = restaurants[i].description;
    const restaurantDistance = document.createElement("p");
    restaurantDistance.classList.add("restaurant-distance");
    restaurantDistance.innerHTML = `📍 ${restaurants[i].distance}`;
    const restaurantRating = document.createElement("p");
    restaurantRating.classList.add("restaurant-rating");
    restaurantRating.innerHTML = `⭐️ ${restaurants[i].rating}`;
    const restaurantFavourites = document.createElement("img");
    restaurantFavourites.classList.add("restaurant-favourites");
    restaurantFavourites.src = "./assets/images/favourite-icon.svg"
    console.log(restaurantFavourites);

    restaurantCard.appendChild(cardHeader);
    cardHeader.appendChild(restaurantImg);
    restaurantCard.appendChild(restaurantName);
    restaurantCard.appendChild(restaurantDescription);
    cardHeader.appendChild(restaurantDistance);
    cardHeader.appendChild(restaurantRating);
    restaurantCard.appendChild(restaurantFavourites);
    restaurantContainer.appendChild(restaurantCard);
}