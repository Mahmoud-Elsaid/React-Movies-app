import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"



export default function Moviedetails() {
    const [movieDetails, setMovieDetails] = useState({});
    const staticImgUrl = "https://image.tmdb.org/t/p/original";
    let params = useParams()
    async function getMovieDetails(){
        
        let {data} = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=d03f158339beceac9f5d36bc0cd52a53&language=en-US`);
        await setMovieDetails(data);
        console.log("movie det" , movieDetails);
        console.log( "id", params.id)
    }
    
    useEffect(()=>{
        getMovieDetails();
        
    },[])

















    let content;
    let gender =[ "Female" , "Male" ,];

    if (params.mediaType === "movie") {
        content = (
            <>
                <div className="col-md-6">
                    {movieDetails.poster_path ? (
                        <img
                            className="w-100"
                            src={staticImgUrl + movieDetails.poster_path}
                            alt="Movie Poster"
                        />
                    ) : (
                        <h1>Movie poster not available</h1>
                    )}
                </div>

                <div className="col-md-6 mt-4 ps-5">
                    <h2 className="text-white my-4">{movieDetails.title}</h2>
                    {movieDetails.genres && movieDetails.genres.length > 2 ? (
                        <>
                            <button className="mx-2 btn btn-info">
                                {movieDetails.genres[0].name}
                            </button>
                            <button className="mx-2 btn btn-info">
                                {movieDetails.genres[1].name}
                            </button>
                            <button className="mx-2 btn btn-info">
                                {movieDetails.genres[2].name}
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="mx-2 btn btn-info">Drama</button>
                            <button className="mx-2 btn btn-info">Action</button>
                            <button className="mx-2 btn btn-info">Crime</button>
                        </>
                    )}

                    <h5 className="my-4">Vote: {movieDetails.vote_average}</h5>
                    <h5 className="my-4">Vote count: {movieDetails.vote_count}</h5>
                    <h5 className="my-4">Popularity: {movieDetails.popularity}</h5>
                    <h5 className="my-4">Release date: {movieDetails.release_date}</h5>
                    <p className="lead my-4">{movieDetails.overview}</p>
                </div>
            </>
        );
    } else if (params.mediaType === "tv") {
        content = (
            <>
                <div className="col-md-6">
                    {movieDetails.backdrop_path ? (
                        <img
                            className="w-100"
                            src={staticImgUrl + movieDetails.backdrop_path}
                            alt="Movie Poster"
                        />
                    ) : (
                        <h1>Movie poster not available</h1>
                    )}
                </div>

                <div className="col-md-6 mt-4 ps-5">
                    <h2 className="text-white my-4">{movieDetails.name}</h2>
                    {movieDetails.genres && movieDetails.genres.length > 2 ? (
                        <>
                            <button className="mx-2 btn btn-info">
                                {movieDetails.genres[0].name}
                            </button>
                            <button className="mx-2 btn btn-info">
                                {movieDetails.genres[1].name}
                            </button>
                            <button className="mx-2 btn btn-info">
                                {movieDetails.genres[2].name}
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="mx-2 btn btn-info">Drama</button>
                            <button className="mx-2 btn btn-info">Action</button>
                            <button className="mx-2 btn btn-info">Crime</button>
                        </>
                    )}

                    <h5 className="my-4">Vote: {movieDetails.vote_average}</h5>
                    <h5 className="my-4">Vote count: {movieDetails.vote_count}</h5>
                    <h5 className="my-4">Popularity: {movieDetails.popularity}</h5>
                    <h5 className="my-4">Release date: {movieDetails.first_air_date}</h5>
                    <p className="lead my-4">{movieDetails.overview}</p>
                </div>
            </>
        );
    } else if (params.mediaType === "person") {
        content = (
            <>
                <div className="col-md-6">
                    {movieDetails.profile_path ? (
                        <img
                            className="w-100"
                            src={staticImgUrl + movieDetails.profile_path}
                            alt="Movie Poster"
                        />
                    ) : (
                        <h1>person poster not available</h1>
                    )}
                </div>

                <div className="col-md-6 mt-4 ps-5">
                    <h2 className="text-white my-4">{movieDetails.name}</h2>
                    

                    <h5 className="my-4">birthday: {movieDetails.birthday}</h5>
                    <h5 className="my-4">place of birth: {movieDetails.place_of_birth}</h5>
                    <h5 className="my-4">Popularity: {movieDetails.popularity}</h5>
                    <h5 className="my-4">gender: {gender[(movieDetails.gender)-1]} </h5>
                    <p className="lead my-4">{movieDetails.biography}</p>
                </div>
            </>
        );
    }
















    
    return (
        <>
            <div className="container">
                <div className=" row">
                                
                {content}
                </div>
            </div>
        </>
        
    )
}
