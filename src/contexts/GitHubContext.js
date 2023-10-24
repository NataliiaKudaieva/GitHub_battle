/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useContext } from "react";
import { useReducer } from "react";
import axios from "axios";
import { getProfile, getRepos } from "../services/githubAPI";

const initialState = {
  error: "",
  previewPlayerOne: {},
  previewPlayerTwo: {},
  fullProfilePlayerOne: {},
  fullProfilePlayerTwo: {},
  isLoading: true,
  language: "",
  popularRepos: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "previewPlayerOne/loaded":
      return {
        ...state,
        previewPlayerOne: {
          playerAvatar: `https://github.com/${action.payload}.png?size200`,
          playerName: action.payload,
        },
      };

    case "previewPlayerTwo/loaded":
      return {
        ...state,
        previewPlayerTwo: {
          playerAvatar: `https://github.com/${action.payload}.png?size200`,
          playerName: action.payload,
        },
      };

    case "fullProfilePlayerOne/loaded":
      return {
        ...state,
        fullProfilePlayerOne: action.payload,
      };

    case "fullProfilePlayerTwo/loaded":
      return {
        ...state,
        fullProfilePlayerTwo: action.payload,
      };
    case "repos/loaded": {
      return {
        ...state,
        popularRepos: action.payload,
      };
    }
    case "error": {
      return {
        ...state,
        error: action.payload,
      };
    }

    case "selectedLanguage": {
      return {
        ...state,
        language: action.payload,
      };
    }
    case "reset": {
      return { ...state, initialState };
    }

    default:
      throw new Error("Unknown action type");
  }
}

const GitHubContext = createContext();

function GitHubProvider({ children }) {
  const [
    {
      previewPlayerOne,
      previewPlayerTwo,
      fullProfilePlayerOne,
      fullProfilePlayerTwo,
      isLoading,
      language,
      error,
      popularRepos,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  /*get preview profile info from GitHub API*/

  const getPreviewProfile = async (id, username) => {
    try {
      dispatch({ type: `preview${id}/loaded`, payload: username });
    } catch (error) {
      dispatch({
        type: "error",
        payload: error.message,
      });
    }
  };

  /*get full profile information from GitHub API*/
  const getFullProfileData = async (id, username) => {
    if (!username) return;
    try {
      const data = await Promise.all([
        getProfile(username),
        getRepos(username),
      ]);

      const [profile, repo] = data;

      dispatch({
        type: `fullProfile${id}/loaded`,
        payload: {
          id: profile.id,
          login: profile.login,
          followers: profile.followers,
          following: profile.following,
          publicRepos: profile.public_repos,
          location: profile?.location,
          company: profile?.company,
          stars: repo[0].stargazers_count,
        },
      });
    } catch (error) {
      dispatch({
        type: "error",
        payload: error.message,
      });
    }
  };

  const fetchPopularRepos = useCallback(
    async function fetchPopularRepos(language = "All") {
      if (!language) return;
      dispatch({ type: "loading", payload: true });
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=desc&type=Repositories`
        );
        dispatch({ type: "repos/loaded", payload: response.data.items });
        dispatch({ type: "loading", payload: false });
      } catch (error) {
        dispatch({
          type: "error",
          payload: `${error.message}. Please try again later`,
        });
      }
    },
    [language]
  );

  return (
    <GitHubContext.Provider
      value={{
        previewPlayerOne,
        previewPlayerTwo,
        getPreviewProfile,
        fullProfilePlayerOne,
        fullProfilePlayerTwo,
        getFullProfileData,
        isLoading,
        popularRepos,
        fetchPopularRepos,
        error,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
}

function useGitHubProfile() {
  const context = useContext(GitHubContext);
  if (context === undefined)
    throw new Error("GitHubContext was used outside the GitHubProvider");
  return context;
}

export { GitHubProvider, useGitHubProfile };
