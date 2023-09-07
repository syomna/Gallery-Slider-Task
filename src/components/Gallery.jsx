import { Stack } from "@mui/material";
import React, { useState } from "react";
import { images } from "../utils/constants";
import Info from "./Info";
import Slider from "./Slider";

export default function Gallery() {
  const [index, setIndex] = useState(3);

  function handleChange(isDecrease) {
    if (isDecrease && index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else if (!isDecrease && index < images.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }
  return (
    <Stack pr={2} py={10} direction={{ sm: "column", md: "row" }}>
      <Slider
        index={index}
        handleIndex={(i) => {
          setIndex(() => i);
        }}
      />
      <Info index={index} handleChange={handleChange} />
    </Stack>
  );
}
