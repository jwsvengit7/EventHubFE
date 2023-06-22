import styled from "styled-components";
import profile from '../../HomePage/image/event_1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import UserProfileModal from "../../Profile-modal/UserProfileModal";

const Profile = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);

  };

  return (
    <>
      <ProfileRow onClick={handleClick}>
        <Round>
          <Img src={profile} alt="logo" />
        </Round>
        <span>
          Temple Jackson &nbsp;
          <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} />
        </span>
      </ProfileRow>
      {isShown && <UserProfileModal />}
    </>
  );
};

export default Profile;

const ProfileRow = styled.div`
  width: 40%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

const Round = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;
