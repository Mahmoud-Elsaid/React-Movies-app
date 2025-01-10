import axios from "axios"
import "./Home.css"
import { useEffect, useState } from "react";
import hoolywoodImg from '../../images/2hhh.jpeg'
import { Link } from "react-router-dom";

export default function Home() {

    let staticImgUrl ="https://image.tmdb.org/t/p/original"
    let [Movies , setMovies] = useState([]);
    let [tv , setTv] = useState([]);
    let [People , setPeople] = useState([]);


    

    //tvshows

    async function getTrendingItems(mediaType , callback){
        let {results} = (await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=d03f158339beceac9f5d36bc0cd52a53`)).data;
        callback(results);
    }


    useEffect(()=>{
        getTrendingItems('movie' , setMovies) ;
        getTrendingItems("tv" , setTv);
        getTrendingItems("person" , setPeople);
    } 

    ,[]);
    

    return (
        <>
        
        <div className=" container mt-5">
            <div className=" row">
                <div className=" col-md-3">
                    <div className='w-25 my-2 border'></div>
                    <div>
                        <h3>trending</h3>
                        <h3>movies</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'>most watched movies by day</p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>

                {Movies.map((movie , index)=> <div key={index} className=" my-movie text-white text-center p-3 col-md-6 col-lg-4">
                    <Link  to={`/Moviedetails/movie/${movie.id}`} >
                        <img src={staticImgUrl+movie.backdrop_path} className="mb-2 w-100" alt="" />
                        <h5 className="fw-bold">{movie.title}</h5>
                    </Link>
                    
                </div>)}
                
            </div>
        
        <hr></hr>
        
            <div className=" row mt-5">
                <div className=" col-md-3">
                    <div className='w-25 my-2 border'></div>
                    <div>
                        <h3>trending</h3>
                        <h3>tv</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'>most watched tv by day</p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>

                {tv.map((tv , index)=> <div key={index} className=" my-movie text-white text-center p-3 col-md-3">
                        <Link to={`/Moviedetails/tv/${tv.id}`}>
                            <img src={staticImgUrl+tv.backdrop_path} className="mb-2 w-100" alt="" />
                            <h5 className="fw-bold">{tv.title}</h5>
                        </Link>
                </div>)}
                
            </div>
        

        <hr></hr>

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
