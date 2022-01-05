import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
} from "react-share";
import { toast } from "react-toastify";

import styled from "styled-components";

const Box = styled.div`
  // display: flex;
  // justify-content: space-between;
  // width: 300px;
  // align-items: center;
  // h3 {
  //   margin: 0;
  // }
`;
const ICON_DEFAULTS = {
  round: true,
  size: 42,
};

const URL = "https://www.givingway.com/";
const HASHTAGS = ["technology", "charity"];
const MESSAGE =
  "I just donated to this important purpose. I invite you to check it out and see if you can help as well.";

export default function SocialShare({ title }) {
  toast.configure({
    position: "top-center",
    autoClose: 2500,
    draggable: true,
  });
  return (
    <Box>
      <FacebookShareButton
        className="my-btn-social"
        url={String(window.location)}
        quote={title}
        hashtag={HASHTAGS[0]}
      >
        <FacebookIcon {...ICON_DEFAULTS} />
      </FacebookShareButton>
      <LinkedinShareButton
        className="my-btn-social"
        url={String(window.location)}
        title={title}
      >
        <LinkedinIcon {...ICON_DEFAULTS} />
      </LinkedinShareButton>
      <TwitterShareButton
        className="my-btn-social"
        url={String(window.location)}
        title={title}
        hashtags={HASHTAGS}
      >
        <TwitterIcon {...ICON_DEFAULTS} />
      </TwitterShareButton>

      <span
        className="my-btn-social"
        onClick={() => {
          navigator.clipboard.writeText(String(window.location))
          toast.success("Link copied !");
        }}
      >
        <img src="/assets/images/resource/icon/Copy Link.svg" alt="copy link" />
      </span>
    </Box>
  );
}
