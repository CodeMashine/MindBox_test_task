import React from "react" ;

import { useAppDispatch , useAppSelector } from '../../redux/store/hooks' ;

import { deleteTodo , toggleTodo } from '../../redux/slices/dataSlice' ;

import { ToDo } from "../../types/data";

function Body () {

    let { todos , condition } = useAppSelector (state => state.data) ;

    const dispatch = useAppDispatch() ;

    let inlet : ToDo[] ;


    
    //наложение фильтра 
    switch (condition){
        case "completed" :
            inlet = todos.filter( todo => todo.isDone) ;
            break ;
        case "unacted" :
            inlet = todos.filter( todo => !todo.isDone) ;
            break ;
        default :
            inlet = todos ;
            break ;
    }
    


    // вывод
    let output = inlet.map ( todo => {
   
        function clear() {
            dispatch(deleteTodo( {toRemoved:todo.id} )) ;
        }
        
        function check(){
            dispatch(toggleTodo( {toToggle:todo.id} )) ;
        }

        return (
            <div className ={`flex justify-between`} key = {`todo-${todo.id}`}>
                <input type = {"checkbox"} onChange = { check } checked={todo.isDone}/>
                <div> {todo.title} </div>
                <button onClick = { clear  } >X</button>
            </div>
        )
    }) ;



    return (
    <div className ={`border-[3px]`}>
        {output}
    </div>
)

}


export { Body } ;