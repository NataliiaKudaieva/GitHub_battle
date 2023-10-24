/* eslint-disable no-undef */
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

import { Link } from "react-router-dom";

import { useGitHubProfile } from "../../contexts/GitHubContext";
import { useEffect, useState } from "react";
import Loader from "../Popular/Loader";

const Battle = () => {
  const {
    previewPlayerOne,
    previewPlayerTwo,
    getPreviewProfile,
    getFullProfileData,
    resetProfile,
  } = useGitHubProfile();


  const handleSubmit = (id, username) => {
    getPreviewProfile(id, username);
    getFullProfileData(id, username);
  };

  const handleReset = (id) => {
    console.log(id);
  };

  return (
    <div className="home-container">
      <div className="row">
        {previewPlayerOne.playerAvatar ? (
          <PlayerPreview
            id="PlayerOne"
            avatar={previewPlayerOne.playerAvatar}
            username={previewPlayerOne.playerName}
            onHandleReset={handleReset}
            render={
              <button className="reset" onClick={handleReset}>
                Reset
              </button>
            }
          />
        ) : (
          <PlayerInput
            id="PlayerOne"
            label="Player 1"
            onSubmit={handleSubmit}
          />
        )}
        {previewPlayerTwo.playerAvatar ? (
          <PlayerPreview
            avatar={previewPlayerTwo.playerAvatar}
            username={previewPlayerTwo.playerName}
            render={
              <button className="reset" onClick={(e) => handleReset(e)}>
                Reset
              </button>
            }
          />
        ) : (
          <PlayerInput
            id="PlayerTwo"
            label="Player 2"
            onSubmit={handleSubmit}
          />
        )}
      </div>

      {previewPlayerOne.playerAvatar && previewPlayerTwo.playerAvatar ? (
        <Link
          to={{
            pathname: "results",
            search: `?playerOneName=${previewPlayerOne.playerName}&playerTwoName=${previewPlayerTwo.playerName}`,
          }}
          state={{
            previewPlayerOne,
            previewPlayerTwo,
          }}
          className="button"
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
