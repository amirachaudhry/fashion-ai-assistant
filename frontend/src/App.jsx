import { useState } from 'react'
import './App.css'

function App() {
  const [itemName, setItemName] = useState("")
  const [wardrobeItems, setWardrobeItemsList] = useState([])

  function addItem(e) {
    e.preventDefault()
    console.log(itemName)
    setWardrobeItemsList([...wardrobeItems, itemName])
    setItemName("")
  }

  return (
    <>
      <main className="App">
        <h1>StyleMatch AI</h1>

        <p> Create outfit suggestions using clothing you already own.</p>

        <div className="wardrobe-section" onSubmit={addItem}>
          <h3>My Wardrobe</h3>
          <form className="wardrobe-form">
            <input type='text' placeholder="Enter clothing item" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            
            <button type='submit'>Add Item</button>
          </form>
          <ul>
            {wardrobeItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>


        <div className="outfit-generator">
          <h3>Outfit Generator</h3>
        </div>

      </main>
    </>
  )
}

export default App
