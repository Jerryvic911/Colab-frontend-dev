import React from "react";
import { Modal } from "./Modal";
import { useState } from "react";

export default function Preview({ isOpen, closeModal, movie }) {
  const RatingStars = ({ rating, maxRating }) => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <span key={i} className={i < rating ? "filled" : "empty"}>
          ★
        </span>
      );
    }

    return <div className="rating-stars">{stars}</div>;
  };

  // MovieList component
  const MovieList = () => {
    // Sample movie data with ratings

    // State to track selected movie
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Function to handle movie click
    const handleMovieClick = (movie) => {
      setSelectedMovie(movie);
    };
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title="">
      <div className="flex gap-5 justify-between">
        <p className="font-bold text-2xl">{movie?.name}</p>
        <button
          onClick={closeModal}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Close
        </button>
      </div>

      <div className="w-full h-[400px] pt-5 pb-10">
        <img className="w-full h-full object-cover" src={movie?.img} alt="/" />
        <div className="flex gap-5 py-4">
          <p className="font-bold">
            Year: <span className="font-normal">{movie?.year}</span>
          </p>
          <p className="font-bold">
            Rating: <span className="font-normal">{movie?.rating}</span>
          </p>
          <RatingStars rating={movie?.rating} maxRating={5} />
        </div>
      </div>
    </Modal>
  );
}
