import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const GetSoccerMatch = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `https://sports-api.named.com/v1.0/sports/soccer/games/${id}/broadcasts`
      );
      const Info = result.data
    //   console.log(Info);
      setData(result.data);
    })();
  }, []);
//   console.log(data[1]);
  return (
    <div>
      <h1>Soccer Match</h1>
      {
        Object.values(data).map((item,idx)=>{
            console.log(item)
            return(
              <div key={idx}>
                <h2>{item.name}</h2>
                <h3>{item.date}</h3>
                <h3>{item.venue}</h3>
                <h3>{item.time}</h3>
              </div>
            )

            
        })
      }
    </div>
  );
};
export default GetSoccerMatch;
