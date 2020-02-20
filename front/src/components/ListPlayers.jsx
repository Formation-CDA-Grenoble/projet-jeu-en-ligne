import React from 'react';

import '../styles/ListPlayers.css';


class ListPlayers extends React.Component {
  state = {
      players: [
          { id: 1, name: "Alexandre" },
          { id: 1, name: "Romain" },
          { id: 1, name: "Alexie" },
          { id: 1, name: "Christan" },
          { id: 1, name: "Adrien" },
          { id: 1, name: "Luca" },
      ]
  };

  
  render() {
      const title = "Liste des joueurs";

      return (
          <div>              
              <h1>{title}</h1>
              <ul>
                  {this.state.players.map(player => (
                    <li>
                        {player.name} 
                    </li>
                  ))}
                </ul>
          </div>
      );
    }
  }



export default ListPlayers;
