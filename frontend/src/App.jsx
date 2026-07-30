import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <main className="App">
        <h1>StyleMatch AI</h1>

        <p> Create outfit suggestions using clothing you already own!</p>

        <div className="wardrobe-section">
          <h3>Wardrobe</h3>
          <button>Add to your wardrobe</button>
        </div>

        <div className="outfit-generator">
          <h3>Outfit Generator</h3>
        </div>

      </main>
    </>
  )
}

export default App
