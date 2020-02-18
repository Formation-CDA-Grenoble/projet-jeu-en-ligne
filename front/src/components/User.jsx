import React from 'react';

const User = ({Id_user, pseudo, email, motpass, statue, score }) =>
  <div>
    <ul>
      <li>{Id_user}</li>
      <li>{pseudo}</li>
      <li>{email}</li>
      <li>{statue}</li>
      <li>{score}</li>
    </ul>
  </div>
;

export default User;