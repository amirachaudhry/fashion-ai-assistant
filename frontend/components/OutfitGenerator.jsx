import { useState } from 'react'
import "../css/OutfitGenerator.css"
const OutfitGenerator = ({ wardrobeItems, setSuggestion }) => {

    const [occasion, setOccasion] = useState("")
    const [style, setStyle] = useState("")
    const [loading, setLoading] = useState(false)

    const generateOutfit = async () => {
        if (!occasion || !style || wardrobeItems.length === 0) {
            alert("Please select both an occasion and a style, and add some wardrobe items first.");
            return;
        }
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/generate-outfit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wardrobeItems,
                occasion,
                style
            })
        });
        const data = await response.json();
        setSuggestion(data.suggestion);
        setLoading(false);
    };

    return (
        <div className="outfit-component">
            <h3>Outfit Generator</h3>
            <p className='description'>Choose your occasion and style to generate an outfit suggestion.</p>
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

            <button onClick={generateOutfit} className="outfit-generator-button" disabled={loading}>
                {loading ? "Generating..." : "Generate Outfit"}
            </button>

        </div>
    )
}

export default OutfitGenerator