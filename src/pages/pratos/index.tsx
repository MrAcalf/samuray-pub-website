import React from 'react';

import Image from 'next/image';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

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
              src="/siri_mole.png"
              alt="Foto de Samuray em frente ao bar"
              width={500}
              height={500}
            />
            <p className="text-sm text-justify md:w-3/4">
              O Siri Mole do Samuray é iguaria. Vem
              no ponto exato de cozimento, molinho e crocante a um só tempo.
              O alho está ali, percebe-se, mas sem agredir ninguém. Da mesma
              forma é possível sentir-se o sabor da manteiga.
              Acompanhado de arroz e pirão de peixe.
              Porção para duas pessaos.
            </p>
          </div>
        </li>
        <li id="item1" className="w-full bg-gray-300 rounded p-5 md:max-w-xl mx-auto mb-5">
          <h3 className="text-2xl mb-3">Lagostim</h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
            <Image
              className="sm: w-full md:w-1/4"
              src="/lagostin.jpeg"
              alt="Foto de Samuray em frente ao bar"
              width={500}
              height={500}
            />
            <p className="text-sm text-justify md:w-3/4">
              Porção de lagostim de sabor amanteigado e suave com alho seco e de
              textura super macia. A porção serve duas pessoas.
            </p>
          </div>
        </li>
        <li id="item1" className="w-full bg-gray-300 rounded p-5 md:max-w-xl mx-auto mb-5">
          <h3 className="text-2xl mb-3">Risoto de camarão</h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
            <Image
              className="sm: w-full md:w-1/4"
              src="/risoto_camarao.jpeg"
              alt="Foto de Samuray em frente ao bar"
              width={500}
              height={500}
            />
            <p className="text-sm text-justify md:w-3/4">
              Risoto de camarão bem suculento feito ao molho do proprio camarão, muito
              saboroso e a porção serve duas pessoas.

            </p>
          </div>
        </li>
        <li id="item1" className="w-full bg-gray-300 rounded p-5 md:max-w-xl mx-auto mb-5">
          <h3 className="text-2xl mb-3">Arroz de polvo</h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
            <Image
              className="sm: w-full md:w-1/4"
              src="/arroz_polvo.jpeg"
              alt="Foto de Samuray em frente ao bar"
              width={500}
              height={500}
            />
            <p className="text-sm text-justify md:w-3/4">
              Risoto feito no caldo do polvo com pedacinhos de polvo com sabor
              bem temperado. Um prato com sabor do mar. Serve duas pessaos.
            </p>
          </div>
        </li>
        <li id="item1" className="w-full bg-gray-300 rounded p-5 md:max-w-xl mx-auto mb-5">
          <h3 className="text-2xl mb-3">Porção de camarão</h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
            <Image
              className="sm: w-full md:w-1/4"
              src="/camarao_porcao.jpeg"
              alt="Foto de Samuray em frente ao bar"
              width={500}
              height={500}
            />
            <p className="text-sm text-justify md:w-3/4">
              Porção de camarão frito na manteiga super saboroso, camarão do mar preparado
              com alho e vem acompanhado de arroz e pirão. Serve duas pessoas.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </Main>
);

export default Menu;
