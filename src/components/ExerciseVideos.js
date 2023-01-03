import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  exerciseVideos = exerciseVideos.filter((item) => item.type === "video");

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: 0 } }}
      >
        {exerciseVideos.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            target="_blank"
            href={`http://www.youtube.com/watch?v=${item.id}`}
            rel="noreferrer"
          >
            <img src={item.bestThumbnail.url} alt={item.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.title}
              </Typography>
              <Typography variant="h7" color="#000">
                {item.author.name}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
