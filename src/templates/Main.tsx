import React, { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-full">
      <div className="bg-yellow-300 p-3 text-center">
        <div className="pb-3">
          <div className="font-bold text-3xl text-gray-900">
            <Image
              src="/Logo.png"
              alt="Logo Bar do Samuray"
              width={200}
              height={200}
            />

          </div>
        </div>
        <div>
          <ul className="flex flex-wrap text-lg 2xl:text-3xl">
            <li className="mr-6">
              <Link href="/">
                <a className="text-gray-900 font-semibold hover:bg-yellow-500 p-3 transition-colors ease-linear border-none hover:text-gray-900">Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/menu/">
                <a className="text-gray-900 font-semibold hover:bg-yellow-500 p-3 transition-colors ease-linear border-none hover:text-gray-900">Menu</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
        {Config.title}
        . Design Por
        {' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
        {' '}
        by
        {' '}
        <a href="https://mra.eti.br/">MRA Web Design</a>
      </div>
    </div>
  </div>
);

export { Main };
