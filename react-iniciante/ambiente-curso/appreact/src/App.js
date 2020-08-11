import React from 'react';

const App = () => {
  const idade = 13;
  const produtos = ['Notebook', 'Celular', 'Teclado', 'Videogame'];
  const livros = [
    { nome: 'Narnia', ano: 1995 },
    { nome: 'Senhor dos Anéis', ano: 1980 },
    { nome: 'Anne Frank', ano: 1950 },
  ];
  return (
    <React.Fragment>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <p>{idade}</p>
      <ul>
        {produtos.map((produto) => (
          <li key={produto}>{produto}</li>
        ))}
      </ul>

      <ul>
        {livros
          .filter(({ ano }) => ano > 1950)
          .map(({ nome, ano }) => (
            <li>
              {nome}, {ano}
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default App;
