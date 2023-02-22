import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import BasicExample from './components/Inputmovies';

 function App() {
//   const dummyMovies = [
//     {
//       id: 1,
//       title: 'Some Dummy Movie',
//       openingText: 'This is the opening text of the movie',
//       releaseDate: '2021-05-18',
//     },
//     {
//       id: 2,
//       title: 'Some Dummy Movie 2',
//       openingText: 'This is the second opening text of the movie',
//       releaseDate: '2021-05-19',
//     },
//   ];

    const[newmovies,setNewmovies]=useState([])
    const[isloading,setIsloading]=useState(false)
    const[error,setError]=useState(null)
       const fetchhandler=useCallback(async()=>{
      setIsloading(true);
      setError(null)
      try{
        const response=await fetch("https://swapi.dev/api/films");
        if(!response.ok){
          throw new Error("something went Wrong");
        }
        const data=await response.json();
        
      
        const movies=data.results.map(item=>{
          return{
            id:item.episode_id,
            title:item.title,
            openingText:item.opening_crawl,
            releaseDate:item.release_date, 
          };
        });
        setNewmovies(movies);
        setIsloading(false);
      } catch(error)
      {setError(error.message)}
      setIsloading(false);
      },[])
      useEffect(()=>{
        fetchhandler()
      },[fetchhandler])
    

  return (
    <React.Fragment>
      <section>
       
      </section>
      <section>
        <button onClick={fetchhandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading && newmovies.length>0&&  <MoviesList movies={newmovies} />}
        {!isloading&&!error&& newmovies.length===0&&<p>No Movies Found</p>}
        {isloading&&<p>LOADING...</p>}
        
        {!isloading&&error&&<p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
