import React from 'react'
import Nav from '../../components/Nav'
import '../../css/SavedSuggestions.css'

const SavedSuggestions = ({ savedSuggestions }) => {
    return (
        <>
            <Nav />

            <main className="saved-suggestions">
                <h1>Saved Suggestions</h1>
                {savedSuggestions.length > 0 ? (
                    savedSuggestions.map((suggestion, index) => (
                        <div key={index} className="saved-suggestion">
                            <p className='suggestion-number'><b>Suggestion {index + 1}:</b></p>
                            <p className="suggestion-text">
                                {suggestion.replace(/\s+(Why:)/i, '\n$1')}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No saved suggestions yet.</p>
                )}
            </main>
        </>
    )
}

export default SavedSuggestions
