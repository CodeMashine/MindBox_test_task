import React from 'react' ;
import { Header } from './header/Header' ;
import { Body } from '../components/body/Body' ;
import { Selector } from '../components/selector/Selector' ;

const App : React.FC =  () => {
  return (
    <div className = {`flex flex-col justify-center w-[70%] mx-auto`}>
      <div>
        <Selector />
      </div>
      <div className ={`flex flex-col`}>
        <Header/>
        <Body />
      </div>
    </div>
  );
}

export { App };
