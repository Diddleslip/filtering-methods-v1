import React, { useState } from 'react';
import {filterData} from "./FilterableData";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

function Filter() {
  const [data, setData] = useState(filterData);
  const [number, setNumber ] = useState(1);
 
  const filterA = () => {
    setData([...data.sort((a,b) => {
      return a.localeCompare(b);
    })])
  }

  const filterB = () => {
    setData([...data.sort((a,b) => {
      return b.localeCompare(a);
    })])
  }
  return (
    <div>
      <h1>Names: </h1>
      <span onClick={() => {
          number === 1 ? filterA() : filterB()
          
          // Changes between value 1, 2, 3
          number === 1 ? setNumber(2) : setNumber(1)

          console.log(number)
        }}
        
      >
        A-Z <FaIcons.FaSort />
      </span>
      {data.map((name, index) => {

        return(
          <h3 key={index}>{name}</h3>
        )
      })}
    </div>
  )
}

export default Filter
