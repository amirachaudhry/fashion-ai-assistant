import { useState } from 'react'
import './App.css'
import Wardrobe from '../components/Wardrobe'
import OutfitGenerator from '../components/OutfitGenerator'

function App() {
  const [wardrobeItems, setWardrobeItems] = useState([])
  const [suggestion, setSuggestion] = useState("")

  return (
    <>
      <main className="App">
        <p className="eyebrow">YOUR PERSONAL STYLIST</p>
        <h1>StyleMatch AI</h1>

        <p> Create outfit suggestions using clothing you already own.</p>

        <div className="page-layout">
          <div className="wardrobe-section">
            <Wardrobe
              wardrobeItems={wardrobeItems}
              setWardrobeItems={setWardrobeItems}
            />
          </div>

          <div className="outfit-generator">
            <OutfitGenerator wardrobeItems={wardrobeItems} setSuggestion={setSuggestion} />
          </div>
        </div>


        <div className="suggestion-container">
          <h3>Suggested Outfit:</h3>
          <p>{suggestion || "No suggestion available."}</p>
        </div>


      </main>
    </>
  )
}

export default App
