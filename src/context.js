import React, { useEffect, useState } from "react";
import axios from "axios";
export const PhotoContext = React.createContext();

export default function PhotoProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/albums"),
        axios.get("https://jsonplaceholder.typicode.com/photos"),
      ])
      .then((response) => {
        setUsers(response[0].data);
        setAlbums(response[1].data);
        setPhotos(response[2].data);
        setLoading(false);
      });
  }, []);

  return (
    <PhotoContext.Provider value={{ users, albums, photos, loading }}>
      {children}
    </PhotoContext.Provider>
  );
}
