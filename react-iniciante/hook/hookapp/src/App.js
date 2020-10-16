import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';
const App = () => {
  // o ativoHook é uma array onde: o primeiro valor é o que passo no useState e o segundo é a função que vai mudar esse valor

  // forma sem destruturação
  // const ativoHook = React.useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];

  // com destruturação
  // const [ativo, setAtivo] = React.useState(false);
  // const [dados, setDados] = React.useState({ nome: 'Kelly', idade: '25' });

  // function handleClick() {
  //   setAtivo(!ativo);
  //   setDados({ ...dados, faculdade: 'Possui faculdade' });
  // }

  const [modal, setModal] = React.useState(false);

  return (
    <div>
      {/* <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button> */}

      <Modal modal={modal} setModal={setModal}></Modal>
      <ButtonModal setModal={setModal}></ButtonModal>
    </div>
  );
};

export default App;
