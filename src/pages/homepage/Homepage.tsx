import { useFetch } from '../../hooks/useFetch';
import type { ListMoviesResponse, MovieResult } from '../../types/api';
import Banner from '../../components/banner/Banner';
import Carousel from '../../components/carousel/Carousel';

export function HomePage() {
  const popularMovies = useFetch<ListMoviesResponse>('/movie/popular');
  const topRatedMovies = useFetch<ListMoviesResponse>('/movie/top_rated');
  const upcomingMovies = useFetch<ListMoviesResponse>('/movie/upcoming');
  const bannerData = popularMovies

  if (popularMovies.isLoading || topRatedMovies.isLoading || upcomingMovies.isLoading) {
    return <p>Chargement des films...</p>;
  }

  const anyError = popularMovies.error || topRatedMovies.error || upcomingMovies.error;
  if (anyError) {
    return <p>Une erreur est survenue lors de la récupération des données.</p>;
  }
  if (bannerData.error || topRatedMovies.error || upcomingMovies.error) {
    return <p>Une erreur est survenue.</p>;
  }

  let randomBannerMovie: MovieResult | null = null;
  if (bannerData.data && bannerData.data.results.length > 0) {
    const movies = bannerData.data.results;
    const random = Math.floor(Math.random() * movies.length);
    randomBannerMovie = movies[random];
  }
  return (
    <div>
      {randomBannerMovie && (
        <Banner
          imageUrl={randomBannerMovie.backdrop_path}
          title={randomBannerMovie.title}
        />
      )}

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
