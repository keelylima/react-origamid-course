import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', ' #252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95789'],
  },
];

const App = () => {
  // const idade = 13;
  // const produtos = ['Notebook', 'Celular', 'Teclado', 'Videogame'];
  // const livros = [
  //   { nome: 'Narnia', ano: 1995 },
  //   { nome: 'Senhor dos Anéis', ano: 1980 },
  //   { nome: 'Anne Frank', ano: 1950 },
  // ];

  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace('R$ ', '')) > 1500,
  );
  return (
    <section>
      {/* dados.map(dado) ... dado.id, dado.nome, dado.preco*/}
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          <ul>
            {cores.map((cor) => (
              <li style={{ backgroundColor: cor, color: 'white' }} key={cor}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
  // <React.Fragment>
  //   <label htmlFor="nome">Nome</label>
  //   <input type="text" id="nome" />
  //   <p>{idade}</p>
  //   <ul>
  //     {produtos.map((produto) => (
  //       <li key={produto}>{produto}</li>
  //     ))}
  //   </ul>

  //   <ul>
  //     {livros
  //       .filter(({ ano }) => ano > 1950)
  //       .map(({ nome, ano }) => (
  //         <li>
  //           {nome}, {ano}
  //         </li>
  //       ))}
  //   </ul>
  // </React.Fragment>
};

export default App;
