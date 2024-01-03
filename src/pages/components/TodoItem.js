import classNames from 'classnames'
import React from 'react'
import TodoCheckbox from './TodoCheckbox'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function TodoItem(props) {
  // console.log(props)
  return (
    <div className='flex w-full items-center'>
      <TodoCheckbox  checked={props.task.selected} onChange={(checked)=> props.onChange({name: props.task.name, selected: checked, id: props.task.id})}/>
      <p className={classNames({'line-through opacity-50': props.task.selected}, 'ml-2 w-[300px] break-words')}>{props.task.name}</p>
      <XMarkIcon className='w-5 ml-auto text-slate-600 cursor-pointer' onClick={()=> props.onDelete(props.task.id)}/>
    </div>
  ) 
}
