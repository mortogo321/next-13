import Movie from "./movie/Movie";

type Props = {
  adult: boolean;
  backdrop_path: string;
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
};

async function getData() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  return await res.json();
}

export default async function Home() {
  const movies = await getData();

  return (
    <main className="container m-4">
      <h1 className="text-6xl">Popular ({movies.results.length})</h1>

      <div className="my-4 grid grid-cols-fluid gap-16">
        {movies.results.map((movie: Props) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
        ))}
      </div>
    </main>
  );
}
