import React, { useState } from 'react'

export const AddCategory = ({handleCategory}) => {
    const [inputValue, setInpuValue] = useState('')

    const handleInput = (e)=>{
        setInpuValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        inputValue.trim();
        handleCategory(inputValue);
        setInpuValue('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="flex justify-center my-2">
        <div className="mb-3 xl:w-96">
            <h3 className='mb-2 text-center xl:text-start'>Please, enter a category to search</h3>
          <input
            type="text"
            value={inputValue}
            onChange={handleInput}
            className="
        form-control
        block
        xl:w-full
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        items-center
      "
            id="exampleFormControlInput1"
            placeholder="Emma Watson..."
          />
        </div>
      </div>

    </form>
  )
}
