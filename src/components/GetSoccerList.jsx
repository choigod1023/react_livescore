import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
const GetSoccerList = () => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `https://sports-api.named.com/v1.0/popular-games?date=2023-05-11&tomorrow-game-flag=true`
      );
      setData(result.data);
    })();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>축구</h1>
      {data.soccer &&
        data.soccer.map((item) => {
          return (
            <Link to={
              `/match/soccer/${item.id}`
            }>
              <strong>{item.teams.away.name}</strong>
              <strong>VS</strong>
              <strong>{item.teams.home.name}</strong>
            <br /><br />
            </Link>
            
          );
        })}
    </div>
  );
};
export default GetSoccerList;
