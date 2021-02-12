import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "EDIR",
      username: "EDIRwebzine",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1286441810970259461/OErdn0Kw_400x400.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  const canTweet = () => (
    tweetMessage.length <= 4
  )

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1286441810970259461/OErdn0Kw_400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="O que está te desocupando?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Opcional: Coloque o URL da imagem"
          type="text"
        />
        <div className="block">
          <b>{4 - tweetMessage.length}</b>
          <Button
            disabled={!canTweet()}
            onClick={sendTweet}
            type="submit"
            className="tweetBox__tweetButton"
          >
            EDIR
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
