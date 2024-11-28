


//     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
// .then(response => {
//     if (!response.ok) 
//         {throw new Error('Network response was not ok');
//     }
//     return response.json();
// })
// .then(data => {
//     console.log(data.meal);
//     data.forEach(meal =>{
//     })

//     .catch(error => {
//         console.error('Error:', error);
//     });
    
// // .then(data => {
// //     console.log(data.image);
// //     data.forEach(meals => {
// //         const markup =<img>$"{meals.image}"</img>
// //     })
// }) 
// const mealContainer =[{
//     image: "https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg",
//     heading: "Chicken handi",
//     para: "Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep gol...",
//     List1:   "Chicken - 1.2", 
//     List2:   "Onion - 5 thinly sliced",
//     List3:   "Tomatoes - 2 finely chopped",
//     List4:   "Garlic - 8 cloves chopped",
//     List5:   "Ginger paste - 1 tbsp",
//     button: "https://www.youtube.com/watch?v=IO0issT0Rmc",
// },
// ]

// document.querySelector("mealContainer").insertAdjacentHTML("beforeend", markup);

// <div class="meal-card">
//     <img src={`${mealContainer.image}`} alt="" />
//     <h2>${meal.heading}</h2>
//     <p>${meal.para}</p>
//     <ul class="meal-ingredient">
//     <li>${meal.List1}</li>
//     <li>${meal.List2}</li>
//     <li>${meal.List3}</li>
//     <li>${meal.List4}</li>
//     <li>${meal.List5}</li>
//     </ul>
//     <a href={`${meal.button}`} target="_blank" class="meal-video">Watch Video</a>
// </div>




// document.querrySelector("meal").insertAdjacentHTML("beforeend", markup); 

{/* // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
// .then((response) => {
//     console.log("Hell")
//     console.log(response)
// }).then((data) => {
//     data.meals
// }) */}

// Fetch data from the API
// Fetch data from the API
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
// .then(data => {
//     // Ensure meals data exists
//     if (data.meals) {
//       // Iterate through each meal and generate markup
//     data.meals.forEach(meal => {
//         const markup = `
//         <div class="meal-card">
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
//             <h2>${meal.strMeal}</h2>
//             <p>${meal.strInstructions.slice(0, 100)}...</p>
//             <ul class="meal-ingredient">
//                 <li>Ingredient 1: ${meal.strIngredient1 || 'N/A'}</li>
//                 <li>Ingredient 2: ${meal.strIngredient2 || 'N/A'}</li>
//                 <li>Ingredient 3: ${meal.strIngredient3 || 'N/A'}</li>
//                 <li>Ingredient 4: ${meal.strIngredient4 || 'N/A'}</li>
//                 <li>Ingredient 5: ${meal.strIngredient5 || 'N/A'}</li>
//             </ul>
//             <a href="${meal.strYoutube}" target="_blank" class="meal-video">Watch Video</a>
//         </div>
//         `;

//         // Insert markup into the DOM
//         document.querySelector(".meal-container").insertAdjacentHTML("beforeend", markup);
//         });
//     } else {
//         console.error('No meals found');
//     }
// })
// .catch(error => {
//     console.error('Error:', error);
// });


const mealContainer = [
    {
    image: "https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg",
    heading: "Chicken Handi",
    para: "Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown.",
    List1: "Chicken - 1.2 kg",
    List2: "Onion - 5 thinly sliced",
    List3: "Tomatoes - 2 finely chopped",
    List4: "Garlic - 8 cloves chopped",
    List5: "Ginger paste - 1 tbsp",
    button: "https://www.youtube.com/watch?v=IO0issT0Rmc",
    },
];

// Fallback: Render static data
mealContainer.forEach(meal => {
    const markup = `
        <div class="meal-card">
        <img src="${meal.image}" alt="${meal.heading}" />
        <h2>${meal.heading}</h2>
        <p>${meal.para}</p>
        <ul class="meal-ingredient">
            <li>${meal.List1}</li>
            <li>${meal.List2}</li>
            <li>${meal.List3}</li>
            <li>${meal.List4}</li>
            <li>${meal.List5}</li>
        </ul>
        <a href="${meal.button}" target="_blank" class="meal-video">Watch Video</a>
    </div>
    `;

    document.querySelector(".mealcontainer").insertAdjacentHTML("beforeend", markup);
});
