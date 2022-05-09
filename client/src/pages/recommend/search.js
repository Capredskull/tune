import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import "./app.css";


const Explore = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [random, setRandom] = useState([]);

  const publicUrl = "http://127.0.0.1:5000/";

  const history = useHistory();

  useEffect(() => {
    axios.get(publicUrl + "random").then((res) => {
      setRandom(res.data);
    });
  }, []);

  const getResults = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);

    if (e.target.value.length >= 4 && e.target.value.length !== 0) {
      axios
        .post(
          `${publicUrl}search`,
          {
            search_param: e.target.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data.search_results);
          setResult(res.data.search_results);
          setRandom(null);
        });
    }
  };

  const getId = (id, song) => {
    console.log(id);
    history.push({
      pathname: "/rec",
      state: { id, song },
    });
  };

  console.log(random, "random", result, "result");

  return (
    <div>
      <div className="search_input_container">
        <div className="button-container">
          <input
            type="text"
            placeholder="Search Songs or Artists"
            onChange={(e) => getResults(e)}
            value={search}
          />
          {console.log(result)}
          <div className="search"></div>
        </div>
      </div>
      {random ? (
        <div className="">
          <div className="heading-container">
            <h1 className="heading-recommend"> TRY SOMETHING DIFFERENT</h1>
          </div>
          <div className="container">
            <div className="flex">
              {random.map((songs) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                  key={songs.spotify_id}
                >
                  <div className="profile-card-2">
                    <img
                      src={songs.image_url}
                      alt={songs.song_name}
                      className="img img-responsive"
                    />
                    <div className="profile-name">{songs.song_name}</div>
                    <div className="profile-username">{songs.artist_name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="heading-container">
            <h1 className="heading-recommend"> Search Results </h1>
          </div>
          {result && (
            <div className="container">
              <div className="flex">
                {result.map((songs) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                    key={songs.spotify_id}
                  >
                    <div className="profile-card-2">
                      <img
                        src={songs.image_url}
                        alt={songs.song}
                        className="img img-responsive"
                        onClick={() => getId(songs.id, songs.song)}
                      />
                      <div className="profile-name">{songs.song}</div>
                      <div className="profile-username">{songs.artist}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Explore;
