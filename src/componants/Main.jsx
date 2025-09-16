export default function Main(){

    const ingredients = ["chicken", "oregano", "tomatoes"]

    const ingredientItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function btnClick(event){
        //now it takes the input value and display on console
        //ingred is the name > <input type = "text" placeholder="Ex: sugar" name = "ingred"/>
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingred")
        ingredients.push(newIngredient)
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