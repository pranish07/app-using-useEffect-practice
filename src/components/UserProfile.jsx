import { useEffect, useState } from "react";
import { fakeFetchUserProfile } from "../data";

export const UserProfile = () => {
  //Create a React component that calls the userProfile api and list the details of the user when the page loads. Create a button saying Update name and on click of that button, change the name of the user.

  const [data, setData] = useState([]);

  const fakeFetchData = async () => {
    const response = await fakeFetchUserProfile(
      "https://example.com/api/profile"
    );
    setData(response.data.profiles);
  };
  useEffect(() => {
    fakeFetchData();
  }, []);
  const { name, email, age, occupation, gender } = data;

  const handleClick = () => {
    const newData = { ...data, name: "Emily" };
    setData(newData);
  };

  return (
    <>
      <h3>Question 8</h3>
      <h2>Profile</h2>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Occupation: {occupation}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>

      <button onClick={handleClick}>Update name</button>
    </>
  );
};
