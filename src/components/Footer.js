import React from 'react'

const Footer = (props) => {

      console.log("====Footer Type", props.type);

  return (
    <div>
               <h2>{props.counter2}</h2>
    </div>
  )
}

export default React.memo(Footer)
