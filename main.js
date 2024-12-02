


fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.meals) {
            const mealContainer = document.querySelector("#mealContainer");

            // Start from the second meal
            const meals = data.meals.slice(1);

            meals.forEach(meal => {
                // Collect only the first 5 ingredients with measurements
                const ingredients = [];
                for (let i = 1; i <= 5; i++) {
                    const ingredient = meal[`strIngredient${i}`]?.trim();
                    const measure = meal[`strMeasure${i}`]?.trim();
                    if (ingredient) {
                        ingredients.push(`<li>${measure || ''} ${ingredient}</li>`);
                    }
                }

                // Generate the HTML for each meal card
                const htmlMarkup = `
                    <div class="meal-card">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-thumbnail">
                        <h2 class="meal-title">${meal.strMeal}</h2>
                        <p class="meal-instructions">${meal.strInstructions.substring(0, 100)}...</p>
                        <ul class="meal-ingredients">
                            ${ingredients.join('')}
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

