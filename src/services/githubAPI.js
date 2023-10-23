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
