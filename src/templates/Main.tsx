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
      <div className="bg-yellow-200 p-3 text-center">
        <div className="pb-3">
          <div className="font-bold text-3xl text-gray-900">
            <Image
              src="/Logo.png"
              alt="Logo Bar do Samuray"
              width={100}
              height={100}
            />

          </div>
        </div>
        <div>
          <ul className="flex flex-wrap text-lg">
            <li className="mr-6">
              <Link href="/">
                <a className="text-gray-700 border-none hover:text-gray-900">Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/menu/">
                <a className="text-gray-700 border-none hover:text-gray-900">Menu</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 px-3 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
        {Config.title}
        . Powered with
        {' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
        {' '}
        by
        {' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
);

export { Main };
