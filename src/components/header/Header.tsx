import React from 'react' ;

import { useAppDispatch } from '../../redux/store/hooks' ;

import { addTodo } from '../../redux/slices/dataSlice' ;


import { ToDo } from '../../types/data';
import { useState , useEffect , useRef } from 'react' ;

const Header : React.FC =  () => {

  const dispatch = useAppDispatch() ;

const [ text , setText ] = useState('') ;
const [ counter , setCounter ] = useState(1) ;

function addDeal (){

  if ( text ) {
      const newTodo : ToDo = {
      id : counter ,
      title : text ,
      isDone : false ,
    }
    
    dispatch(addTodo({todo : newTodo})) ;

    setText('') ;

    
    setCounter( counter + 1 ) ;
    

  }

}

function keyDown(e:React.KeyboardEvent) : void{
  if (e.key === "Enter") addDeal() ;
}



  return (
    <div>
      <div>
        <input value = {text} onChange = {(e) => setText(e.target.value)} onKeyDown = {e => keyDown(e)}/>
        <button onClick = { addDeal }> Add </button>
      </div>


    </div>
  );
}

export { Header };
