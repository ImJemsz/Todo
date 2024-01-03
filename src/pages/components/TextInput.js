import classNames from 'classnames'
import React, { useState } from 'react'

export default function TextInput(props) {
  const [task, setTask] = useState('')
  const addTask = () => {
    if(task.trim().length !== 0){
      props.onChange({name: task, selected: false})
      setTask('')
    }

    setTask('') 
  }
  return (
    <div className='flex flex-row'>
        <input type='text' className='bg-slate-200 h-12 w-72 rounded-3xl pl-5 pr-20 focus:outline-none' placeholder='Add your task' onChange={(e)=>  setTask(e.target.value)} value={task}></input>
        <button className='bg-rose-500 h-12 w-36 rounded-3xl ml-[-60px] font-bold text-white cursor-pointer' onClick={addTask}>ADD</button>
    </div>
  )
}
