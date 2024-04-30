import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import Textarea from "./Textarea";
import Dropdown from "./Dropdown";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    company_name: "",
    phone_number: "",
    type_of_enquiry: "",
    message: "",
  });

  // Define setSelectedOption here
  const [selectedOption, setSelectedOption] = useState(null);
  const history = useNavigate(); // Get the history object

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ris-ej9d.onrender.com/api/v1/contact",
        formData
      );
      console.log("Form submitted successfully!", response.data);
      // Navigate to the home page
      history.push("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <>
      <div className="w-[100%] max-sm:w-[90%] pb-[40px] px-[20px] mx-auto justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flexbox max-sm:flex-col flex-wrap w-full justify-between max-md:justify-center max-md:gap-0 h-full">
            <FormInput
              name="first_name"
              placeholder="First Name..."
              value={formData.first_name}
              onChange={handleChange}
              type="text"
            />
            <FormInput
              name="last_name"
              placeholder="Last Name..."
              value={formData.last_name}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="w-100%">
            <FormInput
              name="email"
              placeholder="Email Address..."
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
            <FormInput
              name="phone_number"
              placeholder="Phone Number..."
              value={formData.phone_number}
              onChange={handleChange}
              type="text"
            />
            <FormInput
              name="company_name"
              placeholder="Company Name..."
              value={formData.company_name}
              onChange={handleChange}
              type="text"
            />
            <Dropdown
              onChange={handleOptionChange}
              name="type_of_enquiry"
              placeholder="Type of Enquiry..."
              value={selectedOption}
            />
            <Textarea
              name="message"
              placeholder="What else do you want to add?"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-1/3 bg-white hover:bg-slate-200 q rounded-lg border-2 border-black h-[50px] justify-center"
            type="submit"
            name=""
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;