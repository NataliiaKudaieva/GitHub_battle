import { useGitHubProfile } from "../../contexts/GitHubContext";

const RepoItem = () => {
  const { popularRepos } = useGitHubProfile();

  return (
    <ul className="popular-list">
      {/* {popularRepos.map((repo, index) => {
        return (
          <li key={repo.id} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  src={repo.owner.avatar_url}
                  alt="avatar"
                  className="avatar"
                ></img>
              </li>
              <li>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        );
      })} */}
    </ul>
  );
};

export default RepoItem;
