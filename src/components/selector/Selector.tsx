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
    let chosen:string  = '';
    if ( position[0] === condition ) {
        chosen = 'bg-slate-400'
    }


    return (
        <button className={`${chosen} w-[100%]`} key = {`position ${num}`} onClick = {()=> dispatch( setCondition({condition : position[1]})) }>
            {position[1]}
        </button>
    )
})


    return (
        <div className ={`flex flex-col border-[3px] items-center`}>
            {output}
        </div>
    )

}


export { Selector } ;