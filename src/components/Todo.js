import { isDocument } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react';

const Todo = ({description, done, onChangeTodo, index}) => {

  const changeTodo = () => {
    console.log("Hallo");
  }

  
  return (
    <div className={
        done ? "flex justify-between p-2 items-center bg-green-600 text-white"
          : "flex justify-between p-2 items-center bg-red-500 text-white"
        }
      >
      <h1 className="text-lg cursor-pointer" onClick={() => {onChangeTodo(index)}} >{description}</h1>
      <button className="text-lg bg-gray-400 p-2 text-white">Löschen</button>
    </div>    
    
    
  )
}

export default Todo