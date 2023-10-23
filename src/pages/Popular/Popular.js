import RepoItem from "./RepoItem";
import Tab from "./Tab";

const Popular = () => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <div>
      <Tab languages={languages} />
      <RepoItem />
    </div>
  );
};

export default Popular;
