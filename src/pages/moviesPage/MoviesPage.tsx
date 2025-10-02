import { useFetch } from '../../hooks/useFetch';
import type { ListMoviesResponse, MovieResult } from '../../types/api';
import Carousel from '../../components/carousel/Carousel';
import "./MoviesPage.css"

export function MoviesPage(){
    const commedyMovies = useFetch<ListMoviesResponse>('/discover/movie?with_genres=35');
    const actiondMovies = useFetch<ListMoviesResponse>('/discover/movie?with_genres=28');
    const fantasticMovies = useFetch<ListMoviesResponse>('/discover/movie?with_genres=14');
    const horrorMovies = useFetch<ListMoviesResponse>('/discover/movie?with_genres=27');
    const animationMovies = useFetch<ListMoviesResponse>('/discover/movie?with_genres=16');

  if (commedyMovies.isLoading || actiondMovies.isLoading || fantasticMovies.isLoading || horrorMovies.isLoading || animationMovies.isLoading) {
    return <p>Chargement des films...</p>;
  }


  const anyError = commedyMovies.error || actiondMovies.error || fantasticMovies.error || horrorMovies.error || animationMovies.error;
  if (anyError) {
    return <p>Une erreur est survenue lors de la récupération des données.</p>;
  }
  return (
    <div>
      {commedyMovies.data && (
        <Carousel<MovieResult> 
            title="Comédie" 
            items={commedyMovies.data.results} 
        />
      )}

      {actiondMovies.data && (
        <Carousel<MovieResult> 
            title="Action" 
            items={actiondMovies.data.results} 
        />
      )}
      
      {fantasticMovies.data && (
        <Carousel<MovieResult> 
            title="Fantastique" 
            items={fantasticMovies.data.results} 
        />
        )}
        
        {horrorMovies.data && (
        <Carousel<MovieResult> 
            title="Horreur" 
            items={horrorMovies.data.results} 
        />
        )}
        
        {animationMovies.data && (
        <Carousel<MovieResult> 
            title="Animation" 
            items={animationMovies.data.results} 
        />
      )}
    </div>
    );
}

export default MoviesPage;