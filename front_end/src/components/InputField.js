import React from 'react'

const InputField = ({label}) => {
  return (
      <div className='flex flex-col mt-4'><label className='text-neutral-700 font-semibold text-sm'>{label}</label><input className='bg-neutral-300   rounded w-full h-8 mt-2' type='text'/></div>
  )
}

export default InputField