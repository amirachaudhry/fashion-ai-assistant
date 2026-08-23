import { useState } from 'react'
import "../css/OutfitGenerator.css"
const OutfitGenerator = ({ wardrobeItems }) => {

    const [occasion, setOccasion] = useState("")
    const [style, setStyle] = useState("")
    const [suggestion, setSuggestion] = useState("")

    return (
        <div className="outfit-component">
            <h3>Outfit Generator</h3>
            <p>Choose your occasion and style to generate an outfit suggestion.</p>

            <label className="form-label" htmlFor="occasion">Occasion:</label>
            <select className="outfit-generator-select" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="">Select an occasion</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="work">Work</option>
                <option value="party">Party</option>
            </select>

            <label className="form-label" htmlFor="style">Style:</label>
            <select className="outfit-generator-select" id="style" value={style} onChange={(e) => setStyle(e.target.value)}>
                <option value="">Select a style</option>
                <option value="classic">Classic</option>
                <option value="trendy">Trendy</option>
                <option value="bohemian">Minimal</option>
                <option value="sporty">Sporty</option>
            </select>

            <button className="outfit-generator-button" onClick={() => {
                // Placeholder for outfit suggestion logic
            }}>Generate Outfit</button>
        </div>
    )
}

export default OutfitGenerator