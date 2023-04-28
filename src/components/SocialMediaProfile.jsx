import { useEffect, useState } from "react";
import { fakeFetchSocialMediaProfile } from "../data";

export const SocialMediaProfile = () => {
  // Create a React component that calls the socialMedia profile api and when the page is loaded show details of the user and a button follow along with the name of the user on the button. On click of that increase the followers count by one and disable the button.

  const [data, setData] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const { name, age, gender, email, followedBy, followers, occupation } = data;
  const fakeFetchData = async () => {
    const response = await fakeFetchSocialMediaProfile(
      "https://example.com/api/profile"
    );
    setData(response.data.profile);
  };
  useEffect(() => {
    fakeFetchData();
  }, []);

  const handleClick = () => {
    const newData = { ...data, followers: followers + 1 };
    setData(newData);
    setIsDisabled(true);
  };

  return (
    <>
      <h3>Question 10</h3>
      <h2>{name}</h2>
      <p>
        <b>Age:</b>
        {age}
      </p>
      <p>
        <b>Gender:</b>
        {gender}
      </p>
      <p>
        <b>Email:</b>
        {email}
      </p>
      <p>
        <b>Occupation:</b>
        {occupation}
      </p>
      <p>
        <b>Followers:</b>
        {followers}
      </p>
      <p>
        <b>Followed By:</b>
        {followedBy}
      </p>
      <button onClick={handleClick} disabled={isDisabled}>
        Follow john
      </button>
    </>
  );
};
