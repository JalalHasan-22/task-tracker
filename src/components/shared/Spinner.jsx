import React from 'react';

import spinner from '../../assets/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      style={{ width: '10%', display: 'block', margin: 'auto' }}
    />
  );
}

export default Spinner;
