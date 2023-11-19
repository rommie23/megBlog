import React,{useId} from 'react'

function Select({

    options,
    label,
    classname = '',
    ...props
}, ref) {
    const id = useId()
  return (

    <div className='w-full'>
        {label && <label htmlFor={id} className=''>{label}</label>}
      <select id={id}
      {...props}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-slate-300 duration-200 border border-slate-500 w-full${classname}`}
      >
        {options?.map((option)=>(
            <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
