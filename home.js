const categoriesContainer = document.querySelector(".food-categories")

const foodCategories = [
    {name: "Italien 🍕", backgroundColor: '#FEED58' },
    {name: "Vegan 🍃", backgroundColor: '#7DED89' },
    {name: "Sushi 🍣", backgroundColor: '#FF9595' },
    {name: "Burger 🍔", backgroundColor: '#FFB94F' },
    {name: "Brunch 🥞", backgroundColor: '#9BCFFF' },
    {name: "Thaï 🍛", backgroundColor: '#CD995C' },
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

