import React from "react";
import { images, primaryColor } from "../utils/constants";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack, Typography } from "@mui/material";

export default function Info({ index, handleChange }) {
  return (
    <Stack
      mx={{ sm: 4, md: 10, lg: 0 }}
      flex={1}
      mt={{ sm: 4, md: 0 }}
      mb={{ sm: 0, md: 15 }}
      direction="column"
      justifyContent="space-between"
    >
      <Typography
        mx={2}
        className="text"
        color={primaryColor}
        sx={{ cursor: "pointer", fontSize: "1.2rem" }}
      >
        SEE ALL
      </Typography>
      <Stack direction="row" mt={{ sm: 10, md: 0 }}>
        <ArrowBackIosIcon
          sx={{
            cursor: "pointer",
            color: `${index === 0 ? "grey" : "#fff"}`,
          }}
          onClick={() => {
            handleChange(true);
          }}
        />
        <Stack mx={{ sm: 8, md: 2, lg: 4 }} direction="column">
          <Stack direction="row" gap={1}>
            <CheckCircleIcon sx={{ color: "#016bff", fontSize: 20 }} />
            <Typography fontWeight="bold" sx={{ fontSize: "1.2rem" }}>
              Project name
            </Typography>
          </Stack>
          <Typography sx={{ fontSize: "1.2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            architecto culpa ipsum dolor deleniti Et, porro!
          </Typography>
        </Stack>
        <ArrowForwardIosIcon
          sx={{
            cursor: "pointer",
            color: `${index === images.length - 1 ? "grey" : "#fff"}`,
          }}
          onClick={() => {
            handleChange(false);
          }}
        />
      </Stack>
    </Stack>
  );
}
