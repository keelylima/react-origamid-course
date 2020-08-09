import React from 'react';
import './App.css';

const App = () => {
  //Sem Webpack/Babel
  // return React.createElement(
  //   'a',
  //   { href: 'https://google.com' },
  //   'Site Google Importado',
  // );

  return <a href="https://google.com">Site Google com Webpack</a>;
};

export default App;
