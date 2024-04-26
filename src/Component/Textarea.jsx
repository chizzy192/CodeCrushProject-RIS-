import React from 'react'

const Textarea = (props) => {
  return (
    <div>
      <textarea name={props.name}
      className='border-2 border-black py-[10px] px-[10px] mb-[30px]'
       placeholder={props.placeholder}
        
         cols="50" rows="5"></textarea>
    </div>
  )
}

export default Textarea
