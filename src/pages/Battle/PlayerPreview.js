const PlayerPreview = ({ avatar, username, render }) => {
  return (
    <div className="column fadeInLeft">
      <img src={avatar} alt="avatar" className="avatar" />
      <h3>{username}</h3>
      {render}
    </div>
  );
};
export default PlayerPreview;
