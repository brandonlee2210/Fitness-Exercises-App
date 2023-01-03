import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: 0 } }}>
      <Typography variant="h4">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" position="relative" p={2}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar
            data={targetMuscleExercises}
            isBodyParts={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mt={5}>
        Exercises that have the same equipment
      </Typography>
      <Stack direction="row" position="relative" p={2}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} isBodyParts={false} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
