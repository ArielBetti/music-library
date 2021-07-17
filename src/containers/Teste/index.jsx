import React from 'react';
import Button from '../../components/Button';

function Teste({
  atributte, testeClick
}) {
  return (
    <div>
      Teste
      <Button name="Enviar" handleClick={() => testeClick()} />
    </div>
  );
}

export default Teste;