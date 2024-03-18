
import { AppContext } from '../context/FetchContext';

import { useContext } from 'react';

const ReducerContext = (state,action) => {

    const {addEventLisnner} = useContext(AppContext);

    
       
  return (
    <div>
            <h>This is Reducer page!!!</h>
    </div>
  )
}

export default ReducerContext
