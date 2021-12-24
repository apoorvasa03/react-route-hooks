import { useEffect } from "react"

const Child = ({renderComment}) => {
     useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [renderComment]);
    return  <h3> {renderComment()} </h3> 
}

export default Child