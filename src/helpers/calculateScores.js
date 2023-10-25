const countStars = (repos) => {
  return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

export const countScores = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = countStars(repos);

  console.log(followers + totalStars);
  return followers + totalStars;
};
