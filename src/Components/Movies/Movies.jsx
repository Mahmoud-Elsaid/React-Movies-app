import axios from "axios"
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";



export default function Movies() {
    
    let staticImgUrl ="https://image.tmdb.org/t/p/original"
    
    let [nowPlayingMovies , setNowPlayingMovies] = useState([]);
    let [popularMovies , setPopularMovies] = useState([]);
    let [topRatedMovies , setTopRatedMovies] = useState([]);
    let [upcomingMovies , setUpcoming] = useState([]);


    async function getMovies(mediaType , callback){
        let {results} = (await axios.get(`https://api.themoviedb.org/3/movie/${mediaType}?api_key=d03f158339beceac9f5d36bc0cd52a53&language=en-US`)).data;
        callback(results);
    }
    
    useEffect(()=>{
        getMovies("now_playing" , setNowPlayingMovies);
        getMovies("popular" , setPopularMovies);
        getMovies("top_rated" , setTopRatedMovies);
        getMovies("upcoming" , setUpcoming);
    }
    ,[])
    
    
    
    
    return (
        <>
            <div className=" container">
                <div className=" row">
                <div className=" col-md-3">
                    <div className='w-25 my-2 border'></div>
                    <div>
                        <h3>now_playing</h3>
                        <h3>movies</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'>most watched movies by day</p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>
                    {nowPlayingMovies.map((movie , index)=> <div className=" col-md-3" key={index}>
                    <Link to={`/Moviedetails/movie/${movie.id}`}>
                        <div className=" text-white text-center p-3">
                        <img src={staticImgUrl+movie.backdrop_path} className="mb-2 w-100" alt="" />
                        <h5 className="fw-bold">{movie.title}</h5>
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
                        <h3>movies</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'>most watched movies by day</p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>
                    {popularMovies.map((movie , index)=> <div className=" col-md-3" key={index}>
                    <Link to={`/Moviedetails/movie/${movie.id}`}>
                        <div className=" text-white text-center p-3">
                        <img src={staticImgUrl+movie.backdrop_path} className="mb-2 w-100" alt="" />
                        <h5 className="fw-bold">{movie.title}</h5>
                        </div>
                    </Link>
                        
                    </div>)}
                </div>

                <hr></hr>
    



                <div className=" row">
                <div className=" col-md-3">
                    <div className='w-25 my-2 border'></div>
                    <div>
                        <h3>Top Rated</h3>
                        <h3>movies</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'>most watched movies by day</p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>
                    {topRatedMovies.map((movie , index)=> <div className=" col-md-3" key={index}>
                    <Link to={`/Moviedetails/movie/${movie.id}`}>
                    <div className=" text-white text-center p-3">
                        <img src={staticImgUrl+movie.backdrop_path} className="mb-2 w-100" alt="" />
                        <h5 className="fw-bold">{movie.title}</h5>
                        </div>
                    </Link>
                        
                    </div>)}
                </div>

                <hr></hr>
                


                <div className=" row">
                <div className=" col-md-3">
                    <div className='w-25 my-2 border'></div>
                    <div>
                        <h3>upcoming</h3>
                        <h3>movies</h3>
                        <h3>to watch now</h3>

                        <p className='second-color'>most watched movies by day</p>
                        </div>
                    <div className='w-100 mb-3 border'></div>
                </div>
                    {upcomingMovies.map((movie , index)=> <div className=" col-md-3" key={index}>
                        <Link to={`/Moviedetails/movie/${movie.id}`}>
                        <div className=" text-white text-center p-3">
                        <img src={staticImgUrl+movie.backdrop_path} className="mb-2 w-100" alt="" />
                        <h5 className="fw-bold">{movie.title}</h5>
                        </div>
                        </Link>
                        
                    </div>)}
                </div>

                <hr></hr>





            </div>
        </>
    )
}
