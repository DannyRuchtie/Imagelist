import React from "react";
import { Helmet } from "react-helmet";

import { story } from "./content/story.js";
import Listitem from "./components/listitem";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Danny Ruchtie</title>
        <meta name="Photo" content="A photo journey" />
      </Helmet>

      <ul>
        {story.map((data, key) => {
          return (
            <Listitem
              key={key}
              img={data.img}
              alt={data.alt}
              detail={data.detail}
            />
          );
        })}
      </ul>
    </div>
  );
}
