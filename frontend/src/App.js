import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/generate-recipe', {
      ingredients: ingredients.split(','),
    });
    setRecipe(response.data.recipe);
  };

  return (
    <div className="App">
      <h1>Recipe Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients separated by commas"
        />
        <button type="submit">Generate Recipe</button>
      </form>
      {recipe && <div><h2>Recipe:</h2><p>{recipe}</p></div>}
    </div>
  );
}

export default App;
