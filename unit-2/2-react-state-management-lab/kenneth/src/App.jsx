import React, { use, useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, SetMoney] = useState(100);
  const totalStrength = team.reduce(
    (total, fighter) => total + fighter.strength,
    0,
  );
  const totalAgility = team.reduce(
    (total, fighter) => total + fighter.agility,
    0,
  );

  const iniZombieFighters = [
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ];

  const [zombieFighters, setZombieFighters] = useState(iniZombieFighters);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) return;
    setTeam((prevTeam) => [...prevTeam, fighter]);
    setZombieFighters((prevFighters) => {
      return prevFighters.filter(
        (prevFighter) => prevFighter.id !== fighter.id,
      );
    });
    SetMoney((prevMoney) => prevMoney - fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    setTeam((prevTeam) => {
      return prevTeam.filter((prevFighter) => {
        return prevFighter.id !== fighter.id;
      });
    });

    setZombieFighters((prevFighters) => {
      return [...prevFighters, fighter];
    });

    SetMoney((prevMoney) => prevMoney + fighter.price);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h5>Money: ${money}</h5>
      <h5>Team Strength: {totalStrength}</h5>
      <h5>Team Agility: {totalAgility}</h5>
      <h5>Team</h5>

      {team.length === 0 ? (
        <small>Pick some team members</small>
      ) : (
        <ul>
          {team.map((fighter) => {
            const { agility, id, img, name, price, strength } = fighter;
            return (
              <li key={id}>
                <img src={img} alt={name} />
                <p>{name}</p>
                <p>Price: ${price}</p>
                <p>Strength: {strength}</p>
                <p>Agility: {agility}</p>
                <button
                  onClick={() => {
                    handleRemoveFighter(fighter);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <h5>Fighters</h5>
      <ul>
        {zombieFighters.map((fighter) => {
          const { agility, id, img, name, price, strength } = fighter;
          return (
            <li key={id}>
              <img src={img} alt={name} />
              <p>{name}</p>
              <p>Price: ${price}</p>
              <p>Strength: {strength}</p>
              <p>Agility: {agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
