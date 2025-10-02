import { useFetch } from '../../hooks/useFetch';
import type { ListSeriesResponse, SeriesResult } from '../../types/api';
import Carousel from '../../components/carousel/Carousel';
import "./SeriesPage.css"

export function SeriesPage(){
    const comedySeries = useFetch<ListSeriesResponse>('/discover/tv?with_genres=35');
    const actiondSeries = useFetch<ListSeriesResponse>('/discover/tv?with_genres=10759');
    const fantasticSeries = useFetch<ListSeriesResponse>('/discover/tv?with_genres=10765');
    const mysterySeries = useFetch<ListSeriesResponse>('/discover/tv?with_genres=9648');
    const animationSeries = useFetch<ListSeriesResponse>('/discover/tv?with_genres=16');

  if (comedySeries.isLoading || actiondSeries.isLoading || fantasticSeries.isLoading || mysterySeries.isLoading || animationSeries.isLoading) {
    return <p>Chargement des séries...</p>;
  }


  const anyError = comedySeries.error || actiondSeries.error || fantasticSeries.error || mysterySeries.error || animationSeries.error;
  if (anyError) {
    return <p>Une erreur est survenue lors de la récupération des données.</p>;
  }
  return (
    <div>
      {comedySeries.data && (
        <Carousel<SeriesResult> 
            title="Comédie" 
            items={comedySeries.data.results} 
        />
      )}

      {actiondSeries.data && (
        <Carousel<SeriesResult> 
            title="Action" 
            items={actiondSeries.data.results} 
        />
      )}
      
      {fantasticSeries.data && (
        <Carousel<SeriesResult> 
            title="Fantastique" 
            items={fantasticSeries.data.results} 
        />
        )}
        
        {mysterySeries.data && (
        <Carousel<SeriesResult> 
            title="Mystère" 
            items={mysterySeries.data.results} 
        />
        )}
        
        {animationSeries.data && (
        <Carousel<SeriesResult> 
            title="Animation" 
            items={animationSeries.data.results} 
        />
      )}
    </div>
    );
}

export default SeriesPage;