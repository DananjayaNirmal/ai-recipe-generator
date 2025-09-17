import React from "react"

export default function Main(){

    const [ingredients, setIngredients] = React.useState([])

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
     
     <ul>
        {ingredientItems}
    </ul>
    </>

    )
} 