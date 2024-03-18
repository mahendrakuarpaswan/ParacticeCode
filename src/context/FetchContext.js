// import reducer from "../reducer/ReducerContext";
import ReducerContext from "../reducer/ReducerContext";
import { createContext, useContext, useEffect, useReducer } from "react";

import axios from 'axios';

export const AppContext = createContext();

const initialState ={
          productdata :[],
          isProduct:false,
}
 



const AppProvider = ({children}) =>{ 

         const [reducer,dispatch] = useReducer(ReducerContext);


     
        const addEventLisnner = () =>{

                  console.log("---Check this function---")
        }


             useEffect(()=>{
       
                     dispatch({type:"SEND_DATA",payload:"Demo API DATA"});

             },[]);

               return <AppContext.Provider value={{addEventLisnner}}>

                         {children}

                      </AppContext.Provider>
};



const fetchProductData = () =>{

       
}


const useContextAPIDATA = () =>{

       return useContext(AppContext)
}

export {AppProvider,useContextAPIDATA}