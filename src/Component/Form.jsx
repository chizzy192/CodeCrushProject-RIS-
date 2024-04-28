import FormInput from "./FormInput"
import Textarea from "./Textarea";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
  }; 
    const handleSubmit = (e) => {
        e.preventDefault();
    const data = new FormData (e.target)
    console.log(Object.fromEntries(data.entries))
    };
  return (
    <>
    <div className="w-[100%] max-sm:w-[90%] pb-[40px] px-[20px] mx-auto justify-center">
        <form onSubmit={handleSubmit}>
            <div className="flex flexbox max-sm:flex-col flex-wrap w-full justify-center gap-40  h-full">
                <FormInput name="firstname" placeholder="First Name..." type="text"  />
                <FormInput name="lastname" placeholder="Last Name..." type="text"/>
                </div>
                <div className="w-100%">
                <FormInput name="email" placeholder="Email Address..." type="email"/>
                <FormInput name="phonenumber" placeholder="Phone Number..." type="cell"/>
                <FormInput name="companyname" placeholder="Company Name" type="text"/>
                <Dropdown onChange={handleOptionChange} name="location" />
                <FormInput name="enquiry" placeholder="Type of Enquiry..." type="text"/>
                <Textarea name="textarea" placeholder="What else do you want to add?" type="text"/>
                </div>
                <button className="w-1/3 bg-white hover:bg-slate-200 q rounded-lg border-2 border-black h-[50px] justify-center" type="submit"  name="">Submit</button>
        </form>
    </div>
</>
  )
}

export default Form

