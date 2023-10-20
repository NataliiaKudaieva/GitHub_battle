import axios from "axios";

/*get profile information from GitHub API*/

export const getProfile = async (username) => {
  const res = await axios.get(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    console.log("hbhs");
  }
  return res.data;
};

/*get repositories information from GitHub API*/
export const getRepos = async (username) => {
  const res = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=100`
  );
  return res.data;
};

export async function fetchPopularRepos(language) {
  if (!language) return;

  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=desc&type=Repositories`
    );
    return response.data.items;
  } catch (error) {
    console.log(error.message);
  }
}
