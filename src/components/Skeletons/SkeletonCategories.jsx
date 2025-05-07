import { Box, Skeleton } from "@mui/material";

export const SkeletonCategory = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 9 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width={200}
          height={300}
          sx={{
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
      ))}
    </Box>
  );
};
