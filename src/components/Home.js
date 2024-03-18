import React, { useState , useCallback,useMemo } from 'react';
import Header from './Header';
import Footer  from './Footer';
import About from './About';

const Home = () => {

  const [checkcount,setCheckcount] = useState(0); 
  const [counter1,setCounter1] = useState(0);
  
  const [counter2,setCounter2] = useState(0);

      const increaseCounterOne = useCallback(() =>{

             setCounter1(counter1+1);
      },[counter1])


      const decrementCounterTwo = useCallback(() =>{

        setCounter2(counter2-1);
 },[counter2]);


 let checkusMemo = useMemo(() =>{
         console.log("-----Click----- or check useMemo() concept---");
         return checkcount > 6?true:false;        
 },[checkcount]);



  return (
    <div className='flex justify-center'>
            <Header type="Home" counter1={counter1}/>
            <button className="w-20 h-8 border bg-red-400" onClick={()=>increaseCounterOne()}>Update counter1:{counter1}</button>

            {console.log("checkusMemo===",checkusMemo)}

            <h onClick={()=>setCheckcount(checkcount+1)}>{checkusMemo &&"Yes This is True Value!!"}CheckCounter</h>

            <button className="w-20 h-8 border bg-red-400" onClick={()=>decrementCounterTwo()}>Update counter1:{counter2}</button>
            <Footer type="Footer" counter2={counter2}/>
    </div>
  )
}

export default Home;










