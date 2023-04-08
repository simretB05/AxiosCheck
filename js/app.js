function getMeal(details){
    
let getmain = document.querySelector( `#main` )
   
let meal_input = document.querySelector( `#meal_input` )
    let input_value = meal_input[`value`]
    console.log(`clicked`)

    function successFunction( response )
    {
        for ( let i = 0; i < response.data.meals.length; i++ ){
            getmain.insertAdjacentHTML( `beforeend`, `<h3>${ response.data.meals[i].strMeal }</h3>
            <img src="${ response.data.meals[i].strMealThumb
            }">`)
        }
     

    


}
function failureFunction( error )
{
    getmain.insertAdjacentHTML( `beforeend`, `<h3>try again</h3>` )
}
    
    axios.request( {
        url: `https://www.themealdb.com/api/json/v1/1/filter.php`,

        params: {
            c:input_value
        }
    } ).then( successFunction ).catch( failureFunction )

}
let submit_meal = document.querySelector(`#submit_btn`)
    submit_meal.addEventListener(`click`,getMeal)