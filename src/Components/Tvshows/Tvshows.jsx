import axios from "axios"
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

export default function Tvshows() {




    let staticImgUrl ="https://image.tmdb.org/t/p/original"
    
    let [nowAiringToday , setNowAiringToday] = useState([]);
    let [onTheAirTVshows , setonTheAirTVshows] = useState([]);
    let [PopularTVshows , setPopularTVshows] = useState([]);
    let [topRatedTVshows , setTopRatedTVshows] = useState([]);


    async function getTVshows(mediaType , callback){
        let {results} = (await axios.get(`https://api.themoviedb.org/3/tv/${mediaType}?api_key=d03f158339beceac9f5d36bc0cd52a53&language=en-US`)).data;
        callback(results);
    }
    
    useEffect(()=>{
        getTVshows("airing_today" , setNowAiringToday);
        getTVshows("on_the_air" , setonTheAirTVshows);
        getTVshows("popular" , setPopularTVshows);
        getTVshows("top_rated" , setTopRatedTVshows);
    }
    ,[])
    


    return (
        <>
            <div className=" container">
                <div className=" row">
                <div className=" col-md-3">
                    <div className='w-25 my-2 border'></div>
                    <div>
                        <h3>now playing</h3>
                        <h3>TVshows</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'>most watched TVshows by day</p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>
                    {nowAiringToday.map((movie , index)=> <div className=" col-md-3" key={index}>
                    <Link to={`/Moviedetails/tv/${movie.id}`}>
                        <div className=" text-white text-center p-3">
                        <img src={staticImgUrl+movie.backdrop_path} className="mb-2 w-100" alt="" />
                        <h5 className="fw-bold">{movie.name}</h5>
                        </div>
                    </Link>
                        
                    </div>)}
                </div>

                <hr></hr>



                <div className=" row">
                <div className=" col-md-3">
                    <div className='w-25 my-2 border'></div>
                    <div>
                        <h3>on The Air</h3>
                        <h3>TVshows</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'>most watched TVshows by day</p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>
                    {onTheAirTVshows.map((movie , index)=> <div className=" col-md-3" key={index}>
                    <Link to={`/Moviedetails/tv/${movie.id}`}>
                        <div className=" text-white text-center p-3">
                        <img src={staticImgUrl+movie.backdrop_path} className="mb-2 w-100" alt="" />
                        <h5 className="fw-bold">{movie.name}</h5>
                        </div>
                    </Link>
                        
                    </div>)}
                </div>

                <hr></hr>
    



                <div className=" row">
                <div className=" col-md-3">
                    <div className='w-25 my-2 border'></div>
                    <div>
                        <h3>popular</h3>
                        <h3>TVshows</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'>most watched TVshows by day</p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>
                    {PopularTVshows.map((movie , index)=> <div className=" col-md-3" key={index}>
                    <Link to={`/Moviedetails/tv/${movie.id}`}>
                    <div className=" text-white text-center p-3">
                        <img src={staticImgUrl+movie.backdrop_path} className="mb-2 w-100" alt="" />
                        <h5 className="fw-bold">{movie.name}</h5>
                        </div>
                    </Link>
                        
                    </div>)}
                </div>

                <hr></hr>
                


                <div className=" row">
                <div className=" col-md-3">
                    <div className='w-25 my-2 border'></div>
                    <div>
                        <h3>top Rated TVshows</h3>
                        <h3>TVshows</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'> top Rated TVshows TVshows </p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>
                    {topRatedTVshows.map((movie , index)=> <div className=" col-md-3" key={index}>
                        <Link to={`/Moviedetails/tv/${movie.id}`}>
                        <div className=" text-white text-center p-3">
                        <img src={staticImgUrl+movie.backdrop_path} className="mb-2 w-100" alt="" />
                        <h5 className="fw-bold">{movie.name}</h5>
                        </div>
                        </Link>
                        
                    </div>)}
                </div>

                <hr></hr>





            </div>
        </>
    )
}
