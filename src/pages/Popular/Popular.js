import { useState } from "react";
import RepoItem from "./RepoItem";
import Tab from "./Tab";
import Error from "../../components/Error";
import { useGitHubProfile } from "../../contexts/GitHubContext";
import Loader from "./Loader";

const Popular = () => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <div>
      <Tab languages={languages} />
      <RepoItem />
      {/* {isLoading && <Loader />}
      {error && <Error error={error} />} */}
    </div>
  );
};

export default Popular;
