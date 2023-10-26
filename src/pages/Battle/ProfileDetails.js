import { Link, useParams } from "react-router-dom";
import { useGitHubProfile } from "../../contexts/GitHubContext";
import { formatDate } from "../../helpers/formatTime";

import iconTime from "../../icons/time.svg";
import iconName from "../../icons/name.svg";
import iconLanguage from "../../icons/language.svg";
import iconStar from "../../icons/star.svg";
import iconRepo from "../../icons/repo.svg";
import iconWatchers from "../../icons/watchers.svg";
import iconIssues from "../../icons/issues.svg";

function ProfileDetails() {
  const { popularRepos } = useGitHubProfile();

  const { repoID } = useParams();

  const popularRepo = popularRepos.filter((repo) => repo.id === +repoID);
  console.log(popularRepo);
  return (
    <div>
      {popularRepo.map((repo) => (
        <div className="column">
          <ul key={repo.id} className="space-list-items">
            <li className="repo_item">
              <img
                src={repo.owner.avatar_url}
                className="avatar"
                alt="repo_img"
              ></img>
            </li>
            <li className="repo_item">
              <img src={iconName} alt="icon-name" className="icon"></img>
              Name: {repo.name}
            </li>
            <li className="repo_item">
              <img src={iconTime} alt="icon-time" className="icon"></img>
              Created at: {formatDate(repo.created_at)}
            </li>
            <li className="repo_item">
              <img
                src={iconLanguage}
                alt="icon-language"
                className="icon"
              ></img>
              Description: {repo.language || `language is not specified⛔`} |
              <p>{repo.description}</p>
            </li>

            <li className="repo_item">
              <img src={iconIssues} alt="icon-issues" className="icon"></img>
              Open issues: {repo.open_issues_count}
            </li>
            <li className="repo_item">
              <img
                src={iconWatchers}
                alt="icon-watchers"
                className="icon"
              ></img>
              Watchers: {repo.watchers}
            </li>
            <li className="repo_item">
              <img src={iconRepo} alt="icon-repo" className="icon"></img>
              Public Repositories: {repo.watchers_count}
            </li>
            <li className="repo_item">
              <img src={iconStar} alt="icon-repo" className="icon"></img>
              Stars: {repo.stargazers_count}
            </li>
          </ul>
          <span>TOPICS:</span>
          <ul className="row">
            {repo.topics.map((topic) => (
              <a href={repo.tags_url}>#{topic}</a>
            ))}
          </ul>
        </div>
      ))}
      <Link to="/popular" className="button">
        Go to popular repositories
      </Link>
    </div>
  );
}

export default ProfileDetails;
