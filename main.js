fetch("(www.themealdb.com/api/json/v1/1/search.php?s=rice)")
    .then(res => res.response.json())
    .then(data =>{
    console.log(data);
    })
    .catch(error => console.error(error));