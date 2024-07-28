"use strict";
const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);

function App() {
  const user = {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pG5U5_JWbGRjygWB9GFT-QiOLevWnnHp4g&s",
    name: "Lady Gaga",
    url: "@ladygaga",
    tweets: 1337,
    following: 561,
    followers: 718,
    gender: "female",
  };

  return <UserCard user={user} />;
}

function UserCard(props) {
  const { user } = props;
  const nameStyle = {
    color: user.gender === "female" ? "pink" : "blue",
  };
  return (
    <article className="userCard">
      <img className="userImg" src={user.imgSrc} alt={user.name} />
      <div className="userInfo">
        <h2 className="userName" style={nameStyle}>
          {user.name}
        </h2>
        <a className="userUrl" href="#">
          {user.url}
        </a>
      </div>
      <button className="followButton">
        <i className="fa fa-plus"></i>
      </button>
      <section className="counts">
        <div>
          <p>Tweets</p>
          <p>{user.tweets.toLocaleString()}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{user.following}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{user.followers}</p>
        </div>
      </section>
    </article>
  );
}
