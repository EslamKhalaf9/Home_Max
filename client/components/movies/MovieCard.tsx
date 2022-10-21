import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type props = {
    movie: string;
}

const MovieCard = ({movie}: props) => {
  return (
    <div className='movie border mb-4 rounded-lg overflow-hidden shadow-md'>
      <Image src='/cover.jpg' width={200} height={300} />
      <div className='info p-2 text-center'>
        <p>{movie}</p>
      </div>
    </div>
  );
};

export default MovieCard;
