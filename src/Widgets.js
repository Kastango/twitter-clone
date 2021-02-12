import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>EDIR</h2>

        <TwitterTweetEmbed tweetId={"1357324894963462153"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="edirwebzine"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={""}
          options={{ text: "edirwebzine é a webzine mais desocupada do momento", via: "EDIRwebzine" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
