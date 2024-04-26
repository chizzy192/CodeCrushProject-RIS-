import React from 'react'
import Select from 'react-select'
const options = [
  { value: "Abia", label: "Abia" },
  { value: "Adamawa", label:  "Adamawa" },
  { value: "Akwa Ibom", label: "Akwa Ibom" },
  { value: "Anambra", label: "Anambra" },
  { value: "Bauchi", label: "Bauchi" },
  { value: "Bayelsa", label: "Bayelsa" },
  { value: "Benue", label: "Benue" },
  { value: "Borno", label: "Borno" },
  { value: "Cross River", label: "Cross River" },
  { value: "Delta", label: "Delta" },
  { value: "Ebonyi", label: "Ebonyi" },
  { value: "Edo", label: "Edo" },
  { value: "Ekiti", label: "Ekiti" },
  { value: "Enugu", label: "Enugu" },
  { value: "Gombe", label: "Gombe" },
  { value: "Imo", label: "Imo" },
  { value: "Jigawa", label: "Jigawa" },
  { value: "Kaduna", label: "Kaduna" },
  { value: "Kano", label: "Kano" },
  { value: "Katsina", label: "Katsina" },
  { value: "Kebbi", label: "Kebbi" },
  { value: "Kogi", label: "Kogi" },
  { value: "Kwara", label: "Kwara" },
  { value: "Lagos", label: "Lagos" },
  { value: "Nasarawa", label: "Nasarawa" },
  { value: "Niger", label: "Niger" },
  { value: "Ogun", label: "Ogun" },
  { value: "Ondo", label: "Ondo" },
  { value: "Osun", label: "Osun" },
  { value: "Oyo", label: "Oyo" },
  { value: "Plateau", label: "Plateau" },
  { value: "Rivers", label: "Rivers" },
  { value: "Sokoto", label: "Sokoto" },
  { value: "Taraba", label: "Taraba" },
  { value: "Yobe", label: "Yobe" },
  { value: "Zamfara", label: "Zamfara" }
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white', // Customize the background color
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // Customize individual option styles
    const color = data.color; // You can access data properties if needed
    return {
      ...styles,
      backgroundColor: isDisabled ? 'red' : 'white',
      color: '#000',
      cursor: isDisabled ? 'not-allowed' : 'default',
      // Add any other styles you want
    };
  },
  // Add more styles for other components if necessary
};

// // Example usage:
// console.log(statesArray[0].value); // Prints "Abia"

const Dropdown = ({ onChange }) => {
  return (
    <Select className='border-2 border-black mb-[20px] py-[10px]  px-[10px] md:w-[100%]'
        options = {options}
        onChange = {onChange}
        styles ={colourStyles}
        placeholder = "Locations"
    />
    

  )
}

export default Dropdown
