import { useEffect, useState } from "react";
import { fakeFetchVideoLibrary } from "../data";

export const VideoLibrary = () => {
  const [data, setData] = useState([]);

  const fakeFetchData = async () => {
    const response = await fakeFetchVideoLibrary(
      "https://example.com/api/videos"
    );
    setData(response.data.videos);
  };

  useEffect(() => {
    fakeFetchData();
  }, []);

  const handleClick = (id) => {
    const filteredData = data.filter((item, idx) => idx !== id);
    setData(filteredData);
  };
  return (
    <>
      <h2>Question 4</h2>
      <h3>Playlist</h3>
      {data.map(({ title, thumbnail, views, likes }, idx) => (
        <div key={idx} style={{ display: "inline-block", margin: "10px" }}>
          <img src={thumbnail} alt="title" />
          <p>{title}</p>
          <p>
            <b>Likes </b>: {likes}
          </p>
          <p>
            <b>Views </b>: {views}
          </p>
        </div>
      ))}
      <br />
      <button onClick={() => handleClick(0)}>Delete</button>
    </>
  );
};
