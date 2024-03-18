import { Box, Text } from "@saleor/macaw-ui/next";
import React from "react";

export const MountingPoint = () => {
  return (
    <Box display="flex" gap={3} paddingX={4} paddingY={5} alignItems="center">
      <Box height={8} width={8}>
        <img
          src="https://salingo-test-media.s3.eu-central-1.amazonaws.com/thumbnails/app-brand-data/logo_63da7a77_thumbnail_64.webp"
          alt="logo"
        />
      </Box>
      <Text variant="bodyStrong" size="small">
        Retrader Dashboard
      </Text>
    </Box>
  );
};
