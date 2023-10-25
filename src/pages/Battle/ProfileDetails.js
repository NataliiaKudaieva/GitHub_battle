function ProfileDetails({ profile }) {

    
  return (
    <div className="column">
      <span>
        🏰 Location: <i>{profile.location}</i>
      </span>
      <span>
        🏢 Company: <i> {profile.company || `⛔not found`}</i>
      </span>
      <span>
        👨‍💻Followers: <i>{profile.followers}</i>
      </span>
      <span>
        🗣 Public Repositories: <i> {profile.publicRepos}</i>
      </span>
      <span>
        🌟 Stars: <i> {profile.stars}</i>
      </span>
    </div>
  );
}

export default ProfileDetails;
