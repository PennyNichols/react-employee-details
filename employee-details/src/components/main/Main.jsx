import React from 'react'
import {useState} from 'react'
import EmployeeCard from './EmployeeCard'
import data from "../../helpers/data"
const Main = () => {
    const [data, setData] = useState(data);
    const [index, setIndex] = useState(0);
  
    const handleNext = () => {
      let newIndex = index + 1;
      if (newIndex > data.length - 1) newIndex = 0;
      setIndex(newIndex);
    };
    const handlePrev = () => {
      let newIndex = index - 1;
      if (newIndex < 0) newIndex = data.length - 1;
      setIndex(newIndex);
    };
  return (
    <div>
        <p className='text-center'>Employee # {index+1}</p>
        <div className='row justify-content-center'>
            <EmployeeCard {...data[index]}/>
        </div>
        <div className='row justify-content-center'>
            <button onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
            <button onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default Main