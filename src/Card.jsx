import verificationIcon from "./assets/verification-Icon.svg";
import followerIcon from "./assets/follower.svg";
import taskIcon from "./assets/tasks.svg";

function Card({ name, image, description, followerCount, taskCount }) {
  return (
    <div className="Card">
      <img className="profile-picture" src={image} alt="" />
      <div className="profile-info">
        <div className="name-header">
          <h2>{name}</h2>
          <img className="verified-icon" src={verificationIcon} alt="" />
          
        </div>
        <div className="profile-description">
            <h5>{description}</h5>
        </div>
        <div className="follower-details">
            <div className="count">
                <img className="follower-details-icon" src={followerIcon} alt="" />
                <h5 className="follower-details-text">{followerCount}</h5>
            </div>
            <div className="tasks">
                <img className="follower-details-icon" src={taskIcon} alt="" />
                <h5 className="follower-details-text">{taskCount}</h5>
            </div>
            <button className="follow-button">Follow +</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
