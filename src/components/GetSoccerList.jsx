import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function GetSoccer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('https://sports-api.named.com/v1.0/popular-games?date=2023-05-11&tomorrow-game-flag=true')
            setData(res.data);
        })();
    }, []);
    return (
        <div>
            <h1>축구</h1>
            <div>

                {data.soccer && data.soccer.map((item, index) => {
                    return (
                        <div>
                            <Link to={{
                                pathname: `/match/baseball/${item.id}`,
                                state: {
                                    id: item.id,
                                    name: item.name,
                                    date: item.date
                                }
                            }} key={index}>
                                <strong>{item.teams.away.name}</strong>
                                <strong> VS </strong>
                                <strong>{item.teams.home.name}</strong>
                            </Link>
                        </div>
                    )
                })}
            </div>

        </div >
    );
}
export default GetSoccer