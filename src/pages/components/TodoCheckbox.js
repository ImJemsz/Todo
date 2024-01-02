import classNames from 'classnames'
import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function TodoCheckbox(props) {
  return (
    <div className={classNames('w-7 h-7 border border-slate-500 rounded-full flex justify-center',{'bg-rose-500 border-rose-500': props.checked}, {'bg-white': !props.checked} )} onClick={()=>  props.onChange(!props.checked)}>
        <CheckIcon className={classNames({'hidden': !props.checked}, 'w-5 text-white cursor-pointer')}/>
    </div>
  )
}
 