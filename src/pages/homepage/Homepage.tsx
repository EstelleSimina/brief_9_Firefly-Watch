import { useFetch } from '../../hooks/useFetch';
import type { ListMoviesResponse, MovieResult } from '../../types/api';
import Carousel from '../../components/carousel/Carousel';

export function HomePage() {
  const popularMovies = useFetch<ListMoviesResponse>('/movie/popular');
  const topRatedMovies = useFetch<ListMoviesResponse>('/movie/top_rated');
  const upcomingMovies = useFetch<ListMoviesResponse>('/movie/upcoming');

  if (popularMovies.isLoading || topRatedMovies.isLoading || upcomingMovies.isLoading) {
    return <p>Chargement des films...</p>;
  }

  const anyError = popularMovies.error || topRatedMovies.error || upcomingMovies.error;
  if (anyError) {
    return <p>Une erreur est survenue lors de la récupération des données.</p>;
  }

  return (
    <div>
      {popularMovies.data && (
        <Carousel<MovieResult> 
            title="Films populaires" 
            items={popularMovies.data.results} 
        />
      )}

      {topRatedMovies.data && (
        <Carousel<MovieResult> 
            title="Films les mieux notés" 
            items={topRatedMovies.data.results} 
        />
      )}
      
      {upcomingMovies.data && (
        <Carousel<MovieResult> 
            title="Films à venir" 
            items={upcomingMovies.data.results} 
        />
      )}
    </div>
  );
}

export default HomePage;
