import React from "react"

export default function Main(){

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    const ingredientItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    //take input, and update the array and display in the console
    function btnClick(event){
        event.preventDefault() // stop refreshing the page
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingred")
        //ingredients.push(newIngredient)
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log(ingredients)

    }

    return(
    <> 
     <div className="main">
        <form className = "get-ingredient-form" onSubmit = {btnClick}>
            <input type = "text" placeholder="Ex: sugar" name = "ingred"/>
            <button>Add ingredient</button>
        </form>
     </div>
     
    <section>

        <h2>Ingredients on hand</h2>
        <ul className = "ingredients-list" arial-live = "polite">{ingredientItems}</ul>
        <div className = "get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Genarate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
        </div>

    </section>

    
    </>

    )
} 