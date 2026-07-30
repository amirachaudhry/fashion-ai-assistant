import { useState } from 'react'

const wardrobe = () => {

  const [itemName, setItemName] = useState("")
  const [wardrobeItems, setWardrobeItemsList] = useState([])

  function addItem(e) {
    e.preventDefault()
    console.log(itemName)
    setWardrobeItemsList([...wardrobeItems, itemName])
    setItemName("")
  }
  return (
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
  )
}

export default wardrobe