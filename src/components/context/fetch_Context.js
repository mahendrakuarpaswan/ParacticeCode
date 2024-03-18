import { createContext } from "react";

const fetchContext = createContext();


const  ContextProvider = ({children}) =>{


        return <fetchContext.Provider>{children}</fetchContext.Provider>

       
}

// this is customer hook

const useFetchContext = () =>{
       
          return useContext(fetchContext)

}


export {ContextProvider,useFetchContext}