"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./index.scss";

interface IAvatar {
  imgUrl: StaticImageData;
}

const Avatar = ({ imgUrl }: IAvatar) => {
  return (
    <div className="portfolio-avatar">
      <Image className="" src={imgUrl} alt="avatar" />
    </div>
  );
};

export default Avatar;
