import React from 'react' ;
import { Header } from './header/Header' ;
import { Body } from '../components/body/Body' ;
import { Selector } from '../components/selector/Selector' ;

const App : React.FC =  () => {
  return (
    <div>
      <Header/>
      <Body />
      <Selector />
    </div>
  );
}

export { App };
