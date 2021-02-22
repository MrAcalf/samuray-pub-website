import React from 'react';

import Image from 'next/image';

import VideoPlayer from '../Components/VideoPlayer';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main
    meta={(
      <Meta
        title="Bar do Samuray"
        description="Bar do Samuray é o restaurante de frutos do mar que serve
         o melhor siri mole do mundo na Brasília Teimosa em Recife - PE."
      />
    )}
  >
    {/* Vídeo do bar */}
    <div className="text-center place-items-center">
      <h1 className="md:text-5xl text-3xl">Bar do Samuray</h1>
      <h2 className="md:text-lg 2xl:text-3xl px-3">
        Bar do Samuray é o restaurante de frutos do mar que serve o
        melhor siri mole do mundo na Brasília Teimosa em Recife - PE.
      </h2>
      <div className="md:px-20 py-5 px-3">
        <VideoPlayer />
      </div>
    </div>
    {/* Historia do bar */}
    <div className="text-center place-items-center md:bg-yellow-300 py-3 my-3">
      <h1 className="md:text-5xl text-3xl py-3">Historia do bar</h1>
      <div className="flex flex-col md:flex-row xl:px-20 xl:pb-12 gap-5 items-center p-4 max-w-full">
        <div className="w-6/12 order-1 md:order-first md:w-6/12 lg:w-8/12 w-full">
          <p className="text-justify w-full 2xl:text-3xl">
            Vindo pela beira mar encontra-se o Bar do Samuray. Mesas na calçada
            ambiente simples, cerveja "estupidamente" gelada e comida de primeira,
            pode acreditar. José Cícero da Silva, cabelos a moda da elite guarreira
            do Japão feudal responde pelço apelido qeu da nome ao restaurante.
            O Bar é comandado por ele, pela esposa Isabel e pelo sorriso cativante
            e espontâneo da filha do casal, Carol. (Victor, Adriana, JC Jornal)
            <br />
            <br />
            <em>
              "Quando eu abri o bar, 21 anos atrás, eu fiz umas coxinhas grandes,
              que dava umas 5, 6 coxinhas normais. A garotada chegava e dizia.
              'Isso não é coxinha, é bomba! Quem fabrica bomba é samurai.
              Você é um samurai'. A ideia surgiu das crianças, de me chamar de
              Samuray. Aí, acabou as coxinhas e permaneceu o apelido Samuray."
            </em>
            <br />
            <br />
            Os sabores sempre divinos. O Siri Mole do Samuray é iguaria. Vem
            no ponto exato de cozimento, molinho e crocante a um só tempo.
            O alho está ali, percebe-se, mas sem agredir ninguém. Da mesma
            forma é possível sentir-se o sabor da manteiga.
            <strong>"O siri é muito melindroso, o segredo do ponto é o amor."</strong>
            <br />
            <br />
            <em><strong>"A receita é Divina e o tempero é o Amor!". (Samuray)</strong></em>
          </p>
        </div>
        <div className="w-6/12 md:w-6/12 lg:w-4/12 w-full">
          <Image
            src="/samuray-no-bar.jpeg"
            alt="Foto de Samuray em frente ao bar"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
    {/* Localização do bar */}
    <div className="text-center place-items-center md:bg-gray-100 bg-yellow-300 2xl:text-3xl">
      <h1 className="text-3xl md:text-5xl">Localização</h1>
      <address className="mb-3">Rua Badejo, Nº: 272, Bairro: Brasília Teimosa, Recife - PE</address>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.1930246134025!2d-34.88106878521995!3d-8.081787394181315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f4ecd684d9f%3A0xf4c752c3653c4a80!2sBar%20do%20Samuray!5e0!3m2!1spt-BR!2sbr!4v1612542025196!5m2!1spt-BR!2sbr"
        height="600"
        frameBorder="0"
        style={{ border: 0, width: '100%' }}
        allowFullScreen={false}
        aria-hidden="false"
      />
    </div>
    {/* Atendimento */}
    <div className="text-center place-items-center bg-yellow-300 py-3 2xl:text-3xl">
      <h1 className="text-3xl md:text-5xl">Horário de funcinamento</h1>
      <p>Atendimento das 10:30 às 20:00.</p>
      <p>Reservas pelo telefone (81) 99879 8853</p>
    </div>
  </Main>
);

export default Index;
