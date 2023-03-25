import Image from "next/image";
import { imagePath } from "../Movie";

type Props = {
  params: {
    id: number;
  };
};

export async function generateStaticParams() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const movies = await res.json();

  return movies.results.map((movie: any) => ({
    id: movie.id,
  }));
}

async function getData(id: number) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`);
  return await res.json();
}

export default async function MovieDetail({ params }: Props) {
  const { id } = params;
  const movie = await getData(id);

  return (
    <div className="m-4">
      <div>
        <h2 className="text-2xl">{movie.title}</h2>
        <h2 className="text-lg">{movie.release_date}</h2>
        <h2>Runtime: {movie.runtime} minutes</h2>
        <h2 className="bg-green-600 text-white text-sm inline-block my-2 px-4 py-2 rounded-md">{movie.status}</h2>

        <Image className="my-12 w-auto" src={imagePath + movie.backdrop_path} width={1000} height={1000} alt={movie.title} />
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
