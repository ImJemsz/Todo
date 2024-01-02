import classNames from 'classnames'
import React from 'react'
import TodoCheckbox from './TodoCheckbox'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function TodoItem(props) {
  return (
    <div className='flex w-full items-center'>
      <TodoCheckbox  checked={props.task.isChecked} onChange={(checked)=> props.onChange({isChecked: checked, id: props.task.id})}/>
      <p className={classNames({'line-through opacity-50': props.task.isChecked}, 'ml-2 w-[300px] break-words')}>{props.task.title}</p>
      <XMarkIcon className='w-5 ml-auto text-slate-600 cursor-pointer' onClick={()=> props.onDelete(props.task.id)}/>
    </div>
  )
}
