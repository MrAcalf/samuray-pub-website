import React from 'react';

import Image from 'next/image';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Menu = () => (
  <Main meta={<Meta title="Menu do bar" description="Cardápio com todos os pratos" />}>
    <div className="text-center place-items-center p-3">
      <h1 className="text-3xl">Conheça nosso menu</h1>
      <ul id="menu">
        <li id="item1" className="w-full bg-gray-300 rounded p-5 md:max-w-xl mx-auto mb-5">
          <h3 className="text-2xl mb-3">Siri mole</h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
            <Image
              className="sm: w-full md:w-1/4"
              src="/samuray-no-bar.jpeg"
              alt="Foto de Samuray em frente ao bar"
              width={500}
              height={500}
            />
            <p className="text-sm text-justify md:w-3/4">
              O Siri Mole do Samuray é iguaria. Vem
              no ponto exato de cozimento, molinho e crocante a um só tempo.
              O alho está ali, percebe-se, mas sem agredir ninguém. Da mesma
              forma é possível sentir-se o sabor da manteiga.

            </p>
          </div>
        </li>
        <li id="item1" className="w-full bg-gray-300 rounded p-5 md:max-w-xl mx-auto mb-5">
          <h3 className="text-2xl mb-3">Siri mole</h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
            <Image
              className="sm: w-full md:w-1/4"
              src="/samuray-no-bar.jpeg"
              alt="Foto de Samuray em frente ao bar"
              width={500}
              height={500}
            />
            <p className="text-sm text-justify md:w-3/4">
              O Siri Mole do Samuray é iguaria. Vem
              no ponto exato de cozimento, molinho e crocante a um só tempo.
              O alho está ali, percebe-se, mas sem agredir ninguém. Da mesma
              forma é possível sentir-se o sabor da manteiga.

            </p>
          </div>
        </li>
        <li id="item1" className="w-full bg-gray-300 rounded p-5 md:max-w-xl mx-auto mb-5">
          <h3 className="text-2xl mb-3">Siri mole</h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
            <Image
              className="sm: w-full md:w-1/4"
              src="/samuray-no-bar.jpeg"
              alt="Foto de Samuray em frente ao bar"
              width={500}
              height={500}
            />
            <p className="text-sm text-justify md:w-3/4">
              O Siri Mole do Samuray é iguaria. Vem
              no ponto exato de cozimento, molinho e crocante a um só tempo.
              O alho está ali, percebe-se, mas sem agredir ninguém. Da mesma
              forma é possível sentir-se o sabor da manteiga.

            </p>
          </div>
        </li>
      </ul>
    </div>
  </Main>
);

export default Menu;
