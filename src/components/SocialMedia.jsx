import { useEffect, useState } from "react";
import { fakeFetchSocialMedia } from "../data";

export const SocialMedia = () => {
  const [data, setData] = useState([]);
  const fakeFetchData = async () => {
    const response = await fakeFetchSocialMedia(
      "https://example.com/api/posts"
    );
    setData(response.data.posts);
  };
  useEffect(() => {
    fakeFetchData();
  }, []);
  const handleClick = () => {
    const filteredData = data.filter((item) => item.category === "Bakery");
    setData(filteredData);
  };
  return (
    <>
      <h2>Question 5</h2>
      {data.map(({ caption, likes, src, views }, idx) => (
        <div style={{ display: "inline-block", margin: "1rem" }} key={idx}>
          <img src={src} alt={caption} width={200} />
          <h5>{caption}</h5>
          <p>Likes:{likes}</p>
          <p>Views: {views}</p>
        </div>
      ))}{" "}
      <br />
      <button onClick={handleClick}>Show bakery</button>
    </>
  );
};
