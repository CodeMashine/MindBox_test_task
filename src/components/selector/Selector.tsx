import React from "react";

import { useAppDispatch , useAppSelector } from '../../redux/store/hooks' ;

import { setCondition } from '../../redux/slices/dataSlice' ;


function Selector () {
const dispatch = useAppDispatch() ;

const condition = useAppSelector(state => state.data.condition) ;

interface List {
    [key :string] :string ;
}


const positions : List = { // варианты отображения
    all : "all" ,
    completed : "completed" ,
    unacted  : "unacted" ,
}

// вывод 
let output = Object.entries( positions ).map( (position , num ) => {
    return (
        <button key = {`position ${num}`} onClick = {()=> dispatch( setCondition({condition : position[1]})) }>
            {position[1]}
        </button>
    )
})


    return (
        <div>
            Selector
            {positions[condition]}
            {output}
        </div>
    )

}


export { Selector } ;