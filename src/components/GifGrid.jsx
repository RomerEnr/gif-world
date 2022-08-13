import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const [counter, setCounter] = useState(1);

    // Need to increase the counter for every GifItem rendered

    const handleCounter = (num) => {
        setCounter(num + 1);
    }

  const getImages = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
  };

  useEffect(() => {
    getImages();
  }, []);
  return (
    <>
      <h3 className="mt-8">{category}</h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full bg-white">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Image
                    </th>
                  </tr>
                </thead>
                 {
                    images.map((image) => (
                        <GifItem key={image.id} {...image} numID={handleCounter}/>
                    ))
                 }
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
