import { useState, useEffect } from "react";
import { getData } from "../helpers/getData";
export const useFetchGifs = () => {
  const [state, setstate] = useState({
    data: [],
  });

  useEffect(() => {
    getData().then((imgs) => {
      setstate({
        data: imgs,
      });
    });
  }, []);
  return state;
};
