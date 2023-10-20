import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import WinnerDetails from "./WinnerDetails";
import Trophy from "../../icons/trophy.png";
import Confetti from "react-confetti";
import Error from "../../components/Error";
import { useGitHubProfile } from "../../contexts/GitHubContext";

const Results = () => {
  const [winner, setWinner] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const location = useLocation();

  const { previewPlayerOne, previewPlayerTwo } = location.state;
  const [error, setError] = useState("");

  const { getFullProfileData, fullProfilePlayerOne, fullProfilePlayerTwo } =
    useGitHubProfile();

  console.log(fullProfilePlayerOne, fullProfilePlayerTwo, "ashaj");

  // useEffect(() => {
  //   if (!winner) setShowConfetti(false);

  //   showConfetti ||
  //     setTimeout(() => {
  //       setShowConfetti(true);
  //     }, 4000);
  // }, [showConfetti, winner]);

  // const countScore = (player) => {
  //   let score = player?.followers + player?.stars;
  //   return score;
  // };

  // useEffect(() => {
  //   if (previewPlayerOne.id === previewPlayerTwo.id) {
  //     setError(`Sorry, we can't compare identical profiles. Try another ones`);
  //     setWinner("");
  //     setShowConfetti(!showConfetti);
  //   } else
  //     countScore(previewPlayerOne) > countScore(previewPlayerTwo)
  //       ? setWinner(previewPlayerOne)
  //       : setWinner(previewPlayerTwo);
  // }, [previewPlayerOne, previewPlayerTwo, showConfetti]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.get("PlayerOne");
  });

  return (
    <>
      <div className="winner__details">
        {/* <img src={Trophy} alt="trophy" className="winner__trophy wobble" />
        <h1 className="winner__heading">Winner is: </h1>
        <span className="winner">{winner.login}</span>
        <PlayerPreview
          avatar={`https://github.com/${winner.login}.png?size200`}
          username={winner.name}
          render={<WinnerDetails winner={winner} />}
        />
        <Link to="/battle">Try again</Link> */}
      </div>

      {!showConfetti && <Confetti />}
    </>
  );
};

export default Results;
