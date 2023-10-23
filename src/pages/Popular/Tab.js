import { useEffect, useState } from "react";
// import { fetchPopularRepos } from "../../api/api";
import { createSearchParams, useNavigate } from "react-router-dom";
// import { fetchPopularRepos } from "../../api/api";
import { useGitHubProfile } from "../../contexts/GitHubContext";

const Tab = ({ languages }) => {
  const [disabled, setDisabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const navigate = useNavigate();
  const { fetchPopularRepos } = useGitHubProfile();

  const searchQueries = (lang) => {
    navigate({
      pathname: `/popular`,
      search: `?${createSearchParams({ lang: lang }).toString()}`,
    });
  };

  useEffect(
    function () {
      fetchPopularRepos(selectedLanguage);
    },
    [selectedLanguage, fetchPopularRepos]
  );

  const handleClick = (language, bool) => {
    setSelectedLanguage(language);

    /*set timer to prevent multiple clicks */
    setDisabled(bool);
    setTimeout(() => {
      setDisabled(!bool);
    }, 2800);

    searchQueries(language);
  };

  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          className={disabled === true ? "disabled" : null}
          key={index}
          style={{
            color: language === selectedLanguage ? "#d0021b" : "#000",
          }}
          onClick={() => {
            handleClick(language, true);
          }}
        >
          {language}
        </li>
      ))}
    </ul>
  );
};
export default Tab;
