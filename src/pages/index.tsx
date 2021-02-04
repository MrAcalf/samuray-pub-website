import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main
    meta={(
      <Meta
        title="Bar do Samuray"
        description="Bar do Samuray é o restaurante de frutos do mar que serve o melhor siri mole do mundo na Brasília Teimosa em Recife - PE."
      />
    )}
  >
    <div className="text-center">
      <h1 className="md:text-5xl text-3xl">Bar do Samuray</h1>
      <h2 className="md:text-lg text-base">
        Bar do Samuray é o restaurante de frutos do mar que serve o
        melhor siri mole do mundo na Brasília Teimosa em Recife - PE.
      </h2>
    </div>
  </Main>
);

export default Index;
