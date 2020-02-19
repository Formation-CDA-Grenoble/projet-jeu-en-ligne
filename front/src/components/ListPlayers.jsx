import React from 'react';




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
                        {player.name} <button>x</button>
                    </li>
                  ))}
                </ul>
              <form>
              <input type ="text" placeholder="Ajouter un joueur" />
              <button>Confirmer</button>

              </form>
            
          </div>
      );
    }
  }



export default ListPlayers;
