import { useState } from 'react'
import './App.css'
import Wardrobe from '../components/Wardrobe'
import OutfitGenerator from '../components/OutfitGenerator'

function App() {
  const [wardrobeItems, setWardrobeItems] = useState([])

  return (
    <>
      <main className="App">
        <p className="eyebrow">YOUR PERSONAL STYLIST</p>
        <h1>StyleMatch AI</h1>

        <p> Create outfit suggestions using clothing you already own.</p>
        <div className="page-layout">
          <div className="wardrobe-section">
            <Wardrobe />
          </div>



          <div className="outfit-generator">
            <OutfitGenerator wardrobeItems={wardrobeItems} />
          </div>
        </div>

      </main>
    </>
  )
}

export default App
