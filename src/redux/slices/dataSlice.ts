import { createSlice } from '@reduxjs/toolkit' ;
import type { PayloadAction } from '@reduxjs/toolkit' ;
// import type { RootState } from '../store/store' ;

import { ToDo } from '../../types/data' ;

interface dataState {
    todos : ToDo[] ,
    condition : string ,
  
}

const initialState: dataState = {
    todos :[] ,
    condition : "all" ,
}

interface innerData {
  todo? : ToDo ;
  condition? : string ;
  toRemoved? : number ;
  toToggle? : number ;
}


export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addTodo: (state , action : PayloadAction<innerData>) => {
      if ( action.payload.todo ) {
        state.todos.push( action.payload.todo ) ;
      }
    },
    deleteTodo: (state , action : PayloadAction<innerData>) => {
      if ( action.payload.toRemoved ){
        state.todos = state.todos.filter( todo => todo.id !== Number(action.payload.toRemoved)) ; 
      }
    },

    toggleTodo : (state ,action: PayloadAction<innerData>) => {
      let toggled = state.todos.find( todo => todo.id === action.payload.toToggle ) ;

      if ( toggled ) {
        toggled.isDone = !toggled.isDone ;
      }

      // if ( action.payload.toToggle) {
      //   state.todos.forEach( todo => {
      //     if ( todo.id === action.payload.toToggle ) {
      //       todo.isDone = !todo.isDone ;
      //     }
      //   })
      // }      
    } ,
    
    setCondition : (state , action : PayloadAction<innerData> ) => {
      if ( action.payload.condition ) {
        state.condition = action.payload.condition ;
      }
  }

  },
})

export const { addTodo , deleteTodo , toggleTodo , setCondition } = dataSlice.actions ;

// export const selectCount = (state: RootState) => state  ;

export default dataSlice.reducer ;