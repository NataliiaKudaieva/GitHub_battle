/* eslint-disable no-undef */
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";
import { useGitHubProfile } from "../../contexts/GitHubContext";
import { useState } from "react";

const Battle = () => {
  const { getFullProfileData } = useGitHubProfile();

  const [playerData, setPlayerData] = useState({
    playerOneName: "",
    playerTwoName: "",
    playerOneImage: null,
    playerTwoImage: null,
  });

  const handleSubmit = (id, username) => {
    setPlayerData((prevState) => ({
      ...prevState,
      [`${id}Name`]: username,
      [`${id}Image`]: `https://github.com/${username}.png?size200`,
    }));

    getFullProfileData(id, username);
  };

  const { playerOneName, playerTwoName, playerOneImage, playerTwoImage } =
    playerData;

  const handleReset = (id) => {
    setPlayerData((prevState) => ({
      ...prevState,
      [`${id}Name`]: "",
      [`${id}Image`]: null,
    }));
  };

  return (
    <div className="home-container">
      <div className="row">
        {playerOneImage ? (
          <PlayerPreview
            id="playerOne"
            avatar={playerOneImage}
            username={playerOneName}
            render={
              <button className="reset" onClick={handleReset("playerOne")}>
                Reset
              </button>
            }
          />
        ) : (
          <PlayerInput
            id="playerOne"
            label="Player 1"
            onSubmit={handleSubmit}
          />
        )}

        {playerTwoImage ? (
          <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
            render={
              <button className="reset" onClick={handleReset("playerTwo")}>
                Reset
              </button>
            }
          />
        ) : (
          <PlayerInput
            id="playerTwo"
            label="Player 2"
            onSubmit={handleSubmit}
          />
        )}
      </div>

      {/* {previewPlayerOne.playerAvatar && previewPlayerTwo.playerAvatar ? (
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
      ) : null} */}
    </div>
  );
};

export default Battle;
