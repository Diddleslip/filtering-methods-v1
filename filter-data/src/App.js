import React, { useState } from 'react';
import {filterData} from "./components/FilterableData";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import './App.css';

function App() {
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

  // console.log("This is data: ", data)
  return (
    <div className="App">


      <h1>Names: </h1>
      <span onClick={() => {
          number === 1 ? filterA() :filterB()
          
          // Changes between value 1-2
          number === 1 ? setNumber(2) : setNumber(1)
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
  );
}

export default App;
