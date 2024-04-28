import React from 'react'

const Textarea = (props) => {
  return (
    <div>
      <input name={props.name}
      className='py-[10px]  px-[10px] border-2 border-black mb-[20px] w-[100%]  h-[100px] '
       placeholder={props.placeholder}
        
        />
    </div>
  )
}

export default Textarea
