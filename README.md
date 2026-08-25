# fashion-ai-assistant

## Aim of this project

The aim of this project is to build a fashion assistant that uses <b>Google Gemini AI</b> to generate outfit suggestions based on clothing items already in the user's wardrobe.

The app allows users to add their own clothing items, select an occasion and preferred style, and receive an AI-generated outfit recommendation.

## How does it work?
1. The user adds clothing items they own to their wardrobe.
2. The user selects an occasion, such as casual, work, formal, or party.
3. The user selects their preferred style.
4. The app sends the wardrobe items and selected options to a Node.js and Express backend.
5. The backend sends this information to the Google Gemini API.
6. Gemini creates an outfit using only the items provided.
7. The app displays the suggested outfit along with a short explanation of why the items work together.


## Tech Stack

- React
- JavaScript
- CSS
- Node.js
- Express
- Google Gemini API
