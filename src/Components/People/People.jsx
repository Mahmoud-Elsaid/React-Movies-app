

import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hoolywoodImg from '../../images/2hhh.jpeg'



export default function People() {
    
    
    let staticImgUrl ="https://image.tmdb.org/t/p/original"
    let [People , setPeople] = useState([]);

    async function getTrendingItems(){
        let {results} = (await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=d03f158339beceac9f5d36bc0cd52a53`)).data;
        setPeople(results);
    }

    
    useEffect(()=>{
        getTrendingItems() ;
        
    },[] );
    
    
    return (
        <>
            <div className=" container">
                <div className=" row mt-5">
                                <div className=" col-md-3">
                                    <div className='w-25 my-2 border'></div>
                                    <div>
                                        <h3>trending</h3>
                                        <h3>People</h3>
                                        <h3>to watch now</h3>
                
                                        <p className='second-color'>most watched People by day</p>
                                        </div>
                                    <div className='w-100 mb-3 border'></div>
                                </div>
                
                                {People.map((person , index)=> <div key={index} className=" my-movie text-white text-center p-3 col-md-3">
                                    <Link to={`/Moviedetails/person/${person.id}`}>
                                        { person.profile_path ?<img src={staticImgUrl+person.profile_path} className="mb-2 w-100" alt="" />: <img src={hoolywoodImg} className="mb-2 w-100" alt="lsdfklfds" /> }
                                        <h5 className="fw-bold">{person.name}</h5>
                                    </Link>
                                    
                                </div>)}
                                
                            </div>
            </div>
        </>
    )
}
