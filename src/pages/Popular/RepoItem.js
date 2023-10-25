import { useGitHubProfile } from "../../contexts/GitHubContext";
import Loader from "../../components/Loader";
import RepoDetails from "./RepoDetails";
import { Link } from "react-router-dom";

const RepoItem = () => {
  const { popularRepos, isLoading } = useGitHubProfile();
  if (isLoading) return <Loader />;
  return (
    <ul className="popular-list">
      {popularRepos.map((repo, index) => {
        return (
          <RepoDetails
            repo={repo}
            index={index}
            key={repo.id}
            render={
              <Link className="button" to={`${repo.id}`} state={{ repo }}>
                Show more
              </Link>
            }
          />
        );
      })}
    </ul>
  );
};

export default RepoItem;
