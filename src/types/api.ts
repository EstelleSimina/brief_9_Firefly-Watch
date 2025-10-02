// =================================================================
//                            MOVIES
// =================================================================

/**
 * interface de la RÉPONSE COMPLÈTE de l'API
 * quand on demande une LISTE de films (populaires, mieux notés...).
 */
export interface ListMoviesResponse {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

/**
 * interface d'UN SEUL film à l'intérieur d'une LISTE.
*/
export interface MovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/**
 * interface de la réponse de l'API pour les DÉTAILS COMPLETS
 * d'un film spécifique.
 */
export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


// =================================================================
//                           TV SERIES
// =================================================================

/**
 * interface de la RÉPONSE COMPLÈTE de l'API
 * quand on demande une LISTE de séries.
 */
export interface ListSeriesResponse {
  page: number;
  results: SeriesResult[];
  total_pages: number;
  total_results: number;
}

/**
 * interface de la forme d'UNE SEULE série à l'intérieur d'une LISTE.
 */
export interface SeriesResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

/**
 * interface de la réponse de l'API pour les DÉTAILS COMPLETS
 * d'une série spécifique.
 */
export interface SeriesDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: Array<{ id: number; name: string }>;
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}


// =================================================================
//                          CASTING & PEOPLE
// =================================================================

/**
 * interface de la réponse de l'API pour les crédits (casting)
 * d'un film ou d'une série.
 */
export interface CreditsResponse {
  id: number;
  cast: CastMember[];
}

/**
 * Décrit UN SEUL membre du casting.
 */
export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

/**
 * Décrit l'interface de la réponse de l'API pour les DÉTAILS COMPLETS
 * d'une personne (acteur, réalisateur...).
 */
export interface PersonDetails {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}

// =================================================================
//                          SHARED TYPES
// =================================================================

// Décrit la forme d'un genre 
export interface Genre {
  id: number;
  name: string;
}

// Décrit une société de production
export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
