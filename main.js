

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Check if meals are returned
        if (data.meals) {
            const mealContainer = document.querySelector("#mealContainer");

            // Generate and display cards for each meal
            data.meals.forEach(meal => {
                const htmlMarkup = `
                    <div class="meal-card">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-thumbnail">
                        <h2 class="meal-title">${meal.strMeal}</h2>
                        <p class="meal-instructions">${meal.strInstructions.substring(0, 100)}...</p>
                        <ul class="meal-ingredients">
                            <li>${meal.strIngredient1}</li>
                            <li>${meal.strIngredient2}</li>
                            <li>${meal.strIngredient3}</li>
                            <li>${meal.strIngredient4}</li>
                            <li>${meal.strIngredient5}</li>
                        </ul>
                        <a href="${meal.strYoutube}" target="_blank" class="meal-video-btn">Watch Video</a>
                    </div>
                `;
                mealContainer.insertAdjacentHTML('beforeend', htmlMarkup);
            });
        } else {
            console.log("No meals found.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
