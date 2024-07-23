// src/App.jsx
import './App.css'

import { useContext, useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZomebieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  );

  const handleAddFigher = (fighter) => {
    if(money - fighter.price < 0){
      return console.log("Not enough money")
    }else{
      const teamCopy = [...team, fighter]
      setTeam(teamCopy)
      setMoney(money - fighter.price)
      setTotalStrength(teamCopy.reduce((acc, fighter) => {
        return acc + fighter.strength
      },0))
      setTotalAgility(teamCopy.reduce((acc, fighter) =>{
        return acc + fighter.agility
      },0))
    }
  }

  const handleRemoveFighter = (index) =>{
    setTeam(team.splice(index, index))
  }


  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team: </h2>
      <h2>Fighters:</h2>
      <div className='team'>
        {team.map((fighter, index) =>{
          return(          
            <ul key={index}>
              <li><img src={fighter.img} /></li>
              <li>{fighter.name}</li>
              <li>Price: {fighter.price}</li>
              <li>Strength: {fighter.strength}</li>
              <li>Agility: {fighter.agility}</li>
              <button onClick={() => handleRemoveFighter(index)}>Delete</button>
            </ul>            
          )
        })}
      </div>
      <div className='zombieFighters'>
        {zombieFighters.map((fighter, index) =>{
          return (
            <ul key={index}>
              <li><img src={fighter.img} /></li>
              <li>{fighter.name}</li>
              <li>Price: {fighter.price}</li>
              <li>Strength: {fighter.strength}</li>
              <li>Agility: {fighter.agility}</li>
              <button onClick={() => handleAddFigher(fighter)}>Add</button>
            </ul> 
          )
        })}
      </div>
    </>
  );
}

export default App

