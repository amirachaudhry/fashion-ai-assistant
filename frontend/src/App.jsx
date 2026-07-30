import { useState } from 'react'
import './App.css'
import Wardrobe from '../components/wardrobe'

function App() {

  return (
    <>
      <main className="App">
        <h1>StyleMatch AI</h1>

        <p> Create outfit suggestions using clothing you already own.</p>
        <div className="page-layout">
        <Wardrobe/>
        


        <div className="outfit-generator">
          <h3>Outfit Generator</h3>
        </div>
        </div>

      </main>
    </>
  )
}

export default App
