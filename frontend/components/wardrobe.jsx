import { useState } from 'react'
import "../css/wardrobe.css"

const Wardrobe = () => {

  const [itemName, setItemName] = useState("")
  const [wardrobeItems, setWardrobeItemsList] = useState([])

  function addItem(e) {
    e.preventDefault()
    console.log(itemName)
    setWardrobeItemsList([...wardrobeItems, itemName])
    setItemName("")
  }

  function removeItem(index) {
    const newWardrobeItems = [...wardrobeItems]
    newWardrobeItems.splice(index, 1)
    setWardrobeItemsList(newWardrobeItems)
  }
  return (
    <div className="wardrobe-component">
      <h3>My Wardrobe</h3>
      <form className="wardrobe-form" onSubmit={addItem}>
        <input className="wardrobe-input" type='text' placeholder="Enter clothing item" value={itemName} onChange={(e) => setItemName(e.target.value)} />

        <button className="item-submit" type='submit'>Add Item</button>
      </form>
      <ul className="wardrobe-list">
        {wardrobeItems.length === 0 ?
          (<p>No items in your wardrobe</p>)
          : (wardrobeItems.map((item, index) => (
            <li className="wardrobe-item" key={index} >
              <span>{item}</span>
              <button type="button" className="item-remove" onClick={() => removeItem(index)}>Remove</button>
            </li>
          )))}
      </ul>
    </div>
  )
}

export default Wardrobe