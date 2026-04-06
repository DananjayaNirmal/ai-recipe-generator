
import React from "react"
import Groq from "groq-sdk"

const client = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
})

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    const ingredientItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function btnClick(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingred")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.currentTarget.reset()
    }

    async function getRecipe() {
        if (ingredients.length === 0) return

        setIsLoading(true)
        setRecipe("")

        try {
            const completion = await client.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                max_tokens: 1024,
                messages: [
                    {
                        role: "user",
                        content: `You are a cooking assistant. Only respond to food and recipe requests.
                        I have these ingredients: ${ingredients.join(", ")}. 
                        Please suggest a recipe I can make with these ingredients for eating.
                        Include: recipe name, ingredients with amounts, and step-by-step cooking instructions.
                        If the ingredients don't make sense for a food recipe, politely say you can only help with food recipes.
                        If there is a one ingredient, tell `
                    }
                ]

            })

            setRecipe(completion.choices[0].message.content)

        } catch (error) {
            setRecipe("Sorry, something went wrong. Please try again.")
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="main">
            <div className="main-intro">
            <h1>What's in your kitchen?</h1>
            <p>Add your ingredients below and let Chef Claude create something delicious.</p>
            </div>
    
            </div>

            <div className="main">
                <form className="get-ingredient-form" onSubmit={btnClick}>
                    <input type="text" placeholder="Ex: sugar" name="ingred" />
                    <button>Add ingredient</button>
                </form>
            </div>

            <section>
                <h2>Ingredients on hand</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientItems}</ul>

                {ingredients.length > 0 &&
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={getRecipe} disabled={isLoading}>
                            {isLoading ? "Getting recipe..." : "Get a recipe"}
                        </button>
                    </div>
                }

                {recipe &&
                    <div className="recipe-container">
                        <h2>Your Recipe</h2>
                        <pre className="recipe-text">{recipe}</pre>
                    </div>
                }
            </section>
        </>
    )
}