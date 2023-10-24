import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import WinnerDetails from "./WinnerDetails";
import Trophy from "../../icons/trophy.png";
import Confetti from "react-confetti";
import { useGitHubProfile } from "../../contexts/GitHubContext";

const Results = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const { fullProfilePlayerOne, fullProfilePlayerTwo } = useGitHubProfile();
  const [winner, setWinner] = useState([]);

  const countScores = (player) => {
    let score = player?.stars + player?.followers;
    return score;
  };

  useEffect(() => {
    countScores(fullProfilePlayerOne) > countScores(fullProfilePlayerTwo)
      ? setWinner(fullProfilePlayerOne)
      : setWinner(fullProfilePlayerTwo);
  }, [fullProfilePlayerOne, fullProfilePlayerTwo]);

  useEffect(() => {
    if (!winner) setShowConfetti(false);

    showConfetti ||
      setTimeout(() => {
        setShowConfetti(true);
      }, 4000);
  }, [showConfetti, winner]);

  return (
    <>
      <div className="winner__details">
        <img src={Trophy} alt="trophy" className="winner__trophy wobble" />
        <h1 className="winner__heading">Winner is: </h1>
        <span className="winner">{winner.login}</span>
        <PlayerPreview
          avatar={`https://github.com/${winner.login}.png?size200`}
          username={winner.name}
          render={<WinnerDetails winner={winner} />}
        />
        <Link to="/battle">Try again</Link>
      </div>

      {!showConfetti && <Confetti />}
    </>
  );
};

export default Results;
