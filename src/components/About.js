import React, { useContext } from 'react';

import { AppContext } from '../context/FetchContext';



const About = () => {

    const value = useContext(AppContext);


    console.log(value);

  return (
    <div>
            <h2>This is About Page </h2>

            <button>Click</button>
    </div>
  )
}

export default About
