import React from 'react';



class ListParties extends React.Component {
    state = {
        parties: [
            { id: 1, name: "Alexandre" },
            { id: 1, name: "Romain" },
            { id: 1, name: "Alexie" },
            { id: 1, name: "Christan" },
            { id: 1, name: "Adrien" },
            { id: 1, name: "Luca" },
        ]
    };

  
  render() {
      const title = "Liste des parties disponibles";

      return (
          <div>              
              <h1>{title}</h1>
              <ul>
                  {this.state.parties.map(partie => (
                    <li>
                        {partie.name} 
                    </li>
                  ))}
                </ul>
                <button onClick={this.handleClick}>Inviter une personne</button>
          </div>
      );
    }
  }



export default ListParties;