import React, { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

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
          <ul className="flex flex-wrap text-lg 2xl:text-3xl items-center">
            <li className="mr-4">
              <Link href="/">
                <a className="text-gray-900 font-semibold hover:bg-yellow-500 p-2 transition-colors ease-linear border-none hover:text-gray-900">Home</a>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/pratos/">
                <a className="text-gray-900 font-semibold hover:bg-yellow-500 p-2 transition-colors ease-linear border-none hover:text-gray-900">Pratos</a>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="https://api.whatsapp.com/send?phone=558198798853">
                <a target="_blank" rel="noreferrer" className="text-gray-900 font-semibold hover:bg-yellow-500 p-2 transition-colors ease-linear border-none hover:text-gray-900 flex items-center">
                  <FaWhatsapp className="pr-1" />
                  {' '}
                  Delivery
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm h-24">
        <p className="flex justify-center place-items-center items-center">
          © Copyright
          {' '}
          {new Date().getFullYear()}
          {' '}
          {Config.title}
          . Design Por:
          {' '}
          <span role="img" aria-label="mra-logo">
            {' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=5512983213301"
              className="px-2"
            >
              <Image
                src="/mra-logo.png"
                alt="Logo Bar do Samuray"
                width={24}
                height={24}
              />
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
);

export { Main };
