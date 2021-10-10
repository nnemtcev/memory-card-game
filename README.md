# Pokémemory: A Multiplayer, Online Memory Card Game

A fun, responsive, and easy-to-play memory card game featuring hundreds of Pokémon. To play, click on Pokémon cards, and do your best to not click on a Pokémon that you've seen before. If you do, it's game over.

Compete against other players and do your best. Check out your high score on the leaderboard and see how well you play compared to others.

**LIVE AT:** https://pokememory-game.netlify.app/

![Gameplay .gif](https://i.gyazo.com/89c9957874f89a45a1f5917068c2821c.gif)

## Features

* Responsive layout using CSS Flexbox (cards resize) and ChakraUI components
* Axios fetches Pokémon data from a RESTful API called [PokéAPI](https://pokeapi.co/) with each rendering
* Score leaderboard keeps track of your high score and compares it to other players around the globe
* Custom styling using the CSS-in-JS library
* Keeps track of which Pokémon you've clicked previously using a hash set for O(1) average-time look-ups

## To-do

* Add more Pokémon
* Add three different difficulties (Easy / Medium / Hard)
