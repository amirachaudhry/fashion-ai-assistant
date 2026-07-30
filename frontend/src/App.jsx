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
        <div className="page-layout">
        <div className="wardrobe-section">
          <h3>My Wardrobe</h3>
          <form className="wardrobe-form" onSubmit={addItem}>
            <input className="wardrobe-input" type='text' placeholder="Enter clothing item" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            
            <button className="item-submit" type='submit'>Add Item</button>
          </form>
          <ul className="wardrobe-list">
            {wardrobeItems.map((item,index) => (
              <li className="wardrobe-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>


        <div className="outfit-generator">
          <h3>Outfit Generator</h3>
        </div>
        </div>

      </main>
    </>
  )
}

export default App
