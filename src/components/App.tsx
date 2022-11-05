import React from 'react' ;
import { Header } from './header/Header' ;
import { Body } from '../components/body/Body' ;
import { Selector } from '../components/selector/Selector' ;

const App : React.FC =  () => {
  return (
    <div className = {`flex justify-center`}>
      <div>
      <Header/>
      <Body />
      </div>
      <Selector />
    </div>
  );
}

export { App };
