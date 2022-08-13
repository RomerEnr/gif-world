import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
import { NavBar } from "./NavBar";

export const GifWorld = () => {
  const [categories, setCategories] = useState([]);
  const handleCategory = (category) => {
    if(categories.includes(category)) return
    setCategories([category, ...categories]);
  };


  return (
    <>
      <NavBar />

      <div className="container mx-auto overflow-hidden">
        <AddCategory handleCategory={handleCategory}/>
            {categories.map((category) => {
              return <GifGrid 
              key={category} 
              category={category}
              />;
            })}
      </div>
    </>
  );
};
