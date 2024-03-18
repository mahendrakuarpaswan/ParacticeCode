import { createContext, useContext } from "react";

import axios from 'axios';

const AppContext = createContext();


const initialState ={
          productdata :[],
          isProduct:false,
}

// 

const AppProvider = ({children}) =>{ 

               return <AppContext.Provider value={null}>

                         {children}

                      </AppContext.Provider>
         

};



const fetchProductData = () =>{

       
}


const useContextAPIDATA = () =>{

       return useContext(AppContext)
}

export {AppProvider,useContextAPIDATA}