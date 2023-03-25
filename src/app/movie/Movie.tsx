import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export const imagePath = "https://image.tmdb.org/t/p/original";

export default function Movie({ id, title, poster_path, release_date }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/movie/${id}`}>
        <Image src={imagePath + poster_path} width={800} height={800} alt={title} className="w-auto" priority />
      </Link>
    </div>
  );
}
