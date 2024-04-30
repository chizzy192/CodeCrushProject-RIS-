

const FormInput = (props) => {
  return (
    <div  className=" ">
      <input required
      name={props.name}
      className="py-[10px]  px-[10px] border-2 border-black mb-[20px] w-full " 
      placeholder={props.placeholder} 
      type={props.type}  />
      
    </div>
  )
}

export default FormInput
