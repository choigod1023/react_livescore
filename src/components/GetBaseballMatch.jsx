import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function GetBaseballMatch() {
    const [data, setData] = useState([]);
    const params = useParams();
    const matchID = params.id;
    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://sports-api.named.com/v1.0/sports/baseball/games/${matchID}/broadcasts`);
            setData(res.data);
        })();
    }, [])
    console.log(data[1]);

    return (
        <div>
            {
                data[0] && data[0].map((item, index) => {
                    item[index] && item[index].map((item, index) => {
                        return (
                            <div>
                                {item.playText}
                            </div>
                        )
                    })
                })
            }
        </div>

    )
}

export default GetBaseballMatch;