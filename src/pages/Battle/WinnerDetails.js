import { useState } from "react";

export default function WinnerDetails({ winner }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowDetails(!showDetails)}>
        {!showDetails ? "Show details" : "Hide"}
      </button>
      {showDetails ? (
        <div className="column">
          <span>
            🏰 Location: <i>{winner.location}</i>
          </span>
          <span>
            🏢 Company: <i> {winner.company || `⛔not found`}</i>
          </span>
          <span>
            👨‍💻Followers: <i>{winner.followers}</i>
          </span>
          <span>
            🗣 Public Repositories: <i> {winner.publicRepos}</i>
          </span>
          <span>
            🌟 Stars: <i> {winner.stars}</i>
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
