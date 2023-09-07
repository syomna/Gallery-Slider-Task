import { Box, Stack } from "@mui/material";
import React from "react";
import { images, primaryColor } from "../utils/constants";

export default function Slider({ index, handleIndex }) {
  return (
    <Stack flex={{ sm: 1, lg: 2 }} direction="column" alignItems="center">
      <Stack direction="row">
        {images.map((image, i) => {
          return (
            <Box
              key={image}
              height="70vh"
              onClick={() => {
                handleIndex(i);
              }}
              width={{
                sm: `${index === i ? "220px" : "60px"}`,
                lg: `${index === i ? "300px" : "80px"}`,
              }}
              mx={0.5}
              sx={{
                transform: `skewX(-15deg)`,
                cursor: "pointer",
                overflow: "hidden",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}
      </Stack>
      <Stack mt={4} mx={4} direction="row">
        {images.map((image, i) => {
          return (
            <Box
              key={image}
              height={6}
              width={6}
              mx={1}
              onClick={() => {
                handleIndex(i);
              }}
              sx={{
                borderRadius: "50%",
                border: `1px solid ${index === i ? primaryColor : "#fff"}`,
                cursor: "pointer",
                backgroundColor: `${index === i ? primaryColor : "#000"}`,
              }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
