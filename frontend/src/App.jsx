import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SavedSuggestions from './pages/SavedSuggestions';
import { useState } from 'react';

function App() {
  const [wardrobeItems, setWardrobeItems] = useState([]);
  const [suggestion, setSuggestion] = useState('');
  const [savedSuggestions, setSavedSuggestions] = useState([]);

  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              wardrobeItems={wardrobeItems}
              setWardrobeItems={setWardrobeItems}
              suggestion={suggestion}
              setSuggestion={setSuggestion}
              savedSuggestions={savedSuggestions}
              setSavedSuggestions={setSavedSuggestions}
            />
          }
        />
        <Route path="/saved" element={<SavedSuggestions savedSuggestions={savedSuggestions} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App