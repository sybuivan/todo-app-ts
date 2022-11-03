import * as React from 'react';
import { Outlet } from 'react-router';
import { Footer } from './Footer';
import { Header } from './Header';
import style from './Main.module.css';

export interface IMainProps {}

export default function Main(props: IMainProps) {
  return (
    <div className={style.wapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
