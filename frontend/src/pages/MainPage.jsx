import '../../css/MainPage.css'
import '../../css/Wardrobe.css'
import '../../css/OutfitGenerator.css'
import Nav from '../../components/Nav'
import Wardrobe from '../../components/Wardrobe'
import OutfitGenerator from '../../components/OutfitGenerator'

const MainPage = ({ wardrobeItems, setWardrobeItems, suggestion, setSuggestion }) => {

    return (
        <main className="App">
            <Nav></Nav>
            <p className="eyebrow">YOUR PERSONAL STYLIST</p>
            <h1>StyleMatch AI</h1>
            <p>Create outfit suggestions using clothing you already own.</p>

            <div className="page-layout">
                <div className="wardrobe-section">
                    <Wardrobe
                        wardrobeItems={wardrobeItems}
                        setWardrobeItems={setWardrobeItems}
                    />
                </div>

                <div className="outfit-generator">
                    <OutfitGenerator
                        wardrobeItems={wardrobeItems}
                        setSuggestion={setSuggestion}
                    />
                </div>
            </div>

            <div className="suggestion-container">
                <h3>Suggested Outfit:</h3>
                <p>{suggestion || 'No suggestion available.'}</p>
            </div>
        </main>
    )
}

export default MainPage
