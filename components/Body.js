import { Restaurant } from "./Restaurant";
import { useEffect, useState } from "react";

// import Shimmer from "./Shimmer";

export const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([
    {
      info: {
        id: "1004721",
        name: "Mr Phillys American Cheeseburgers",
        avgRating: 4.4,
        locality: "HSR",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/c41fe099-61b1-45cd-af96-9eee8d87e119_1004721.jpg",
      },
    },
    {
      info: {
        id: "654965",
        name: "Hyderabadi Biryani Hub",
        avgRating: 4.1,
        locality: "BTM Layout",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/5/17/69550922-c2cb-4bc2-adf3-34a6d1597be9_35c00581-1cf1-47ad-be49-86856939af2a.png",
      },
    },
    {
      info: {
        id: "275",
        name: "Mani's Dum Biryani",
        avgRating: 4.6,
        locality: "Koramangala",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg",
      },
    },
    {
      info: {
        id: "139558",
        name: "Dindigul Thalappakatti",
        avgRating: 4.3,
        locality: "HSR Layout",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg",
      },
    },
  ]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");



  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //   );
  //   const json = await data.json();
  //   // console.log(json); // You can explore json data here
  // };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredRestaurant(filtered);
          }}
        >
          Top Rated Restro
        </button>
      </div>

      <div className="search">
        <input
          type="text"
          className="searchbox"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filtered = ListOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurant(filtered);
          }}
        >
          Search
        </button>
      </div>

      <div className="resto">
        {(filteredRestaurant.length > 0 ? filteredRestaurant : ListOfRestaurants).map(
          (res) => (
            <Restaurant key={res.info.id} resname={res} />
          )
        )}
      </div>
    </div>
  );
};

   
    // export const Count=()=>{
    //     let [count, setCount]=useState(0)
    //     return (
    //         <div>
    //             <button >

    //             </button>
    //             <button onClick={
    //               ()=>setCount(count>0?count-1:alert("cant go more than this"))
    //             }>
    //                    -
    //             </button>
    //                  value :{count}
    //             <button onClick={
    //                 ()=> setCount
    //                     (count=count+1)
                    
    //             }>
    //                   +
    //             </button>
    //         </div>
    //     )
    // }

    // import React, { useState } from 'react';

