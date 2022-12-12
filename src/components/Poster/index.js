import React from "react";
import { useState } from "react";
import Movies from "../../movies.json";
import "./poster.css";

export default function Poster() {
  const [selected, setSelected] = useState({ id: 0, isSelected: false });

  return (
    <>
      {Movies.map((movie, i) => (
        <div>
          <span key={i} className="poster">
            <img className="image" src={"./dist/" + movie.cover}></img>
            <span>
              <p>{movie.title}</p>
              {selected.isSelected ? (
                <img
                  className="icon"
                  onClick={() => {
                    setSelected({ id: 0, isSelected: false });
                  }}
                  src="./dist/assets/icons/bookmark-2.png"
                ></img>
              ) : (
                <img
                  className="icon"
                  onClick={() => {
                    setSelected({ id: i, isSelected: true });
                  }}
                  src="./dist/assets/icons/bookmark-1.png"
                ></img>
              )}
            </span>
          </span>
        </div>
      ))}
    </>
  );
}
