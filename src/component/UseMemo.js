
import axios from "axios";
import { useEffect, useState } from "react";

const UseMemo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          setData(response.data);
        });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;
    
        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
          let currentName = comments[i].name;
          if (currentName.length > longestName.length) {
            longestName = currentName;
          }
        }
        console.log('IM CALLED')
     return longestName
    }

    return (
        <div>
            <h3> {findLongestName(data)} </h3>
            <button onClick={() => { setToggle(!toggle); }}>Toggle </button>
            {toggle && <h1> toggle </h1>}
        </div>
    )
}

console.log(UseMemo)

export default UseMemo
