import React, { useState, useEffect } from "react";

export const Async = () => {
  const [text, setText] = useState("");

  const myPromiseFunc = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("I'm resolved");
      }, 2000);
    });
  };

  const myAsyncFunc = async () => {
    try {
      const data = await myPromiseFunc();
      setText(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    myAsyncFunc();
  }, []);

  return <div>{text}</div>;
};
