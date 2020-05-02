import React from 'react';
import '../Styles/Pokeball.css';
import Pokeball from '../Images/pokeball.png';

//this should be a function ?
export default function SpinningPokeball() {
  return (
    <img className="transition-pokeball" src={Pokeball} alt="spinning-pokeball"></img>
  )
};