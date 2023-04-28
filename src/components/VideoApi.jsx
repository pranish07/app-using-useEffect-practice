import { useEffect, useState } from "react";
import { fakeFetchVideo } from "../data";

export const VideoApi = () => {
  const [data, setData] = useState([]);
  const { likes, thumbnail, title, views, label } = data;

  const fakeFetchData = async () => {
    const response = await fakeFetchVideo("https://example.com/api/getvideo");
    setData(response.data.videos);
  };
  useEffect(() => {
    fakeFetchData();
  }, []);

  const handleClick = () => {
    const newData = { ...data, label: "Self Motivation" };
    setData(newData);
  };

  return (
    <>
      <h3>Question 9</h3>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>Likes:{likes}</p>
      <p>Views: {views}</p>
      <p>Label :{label ?? "none"}</p>
      <button onClick={handleClick}>Label</button>
    </>
  );
};
