import logo from "@assets/logo.png";
import { Box, Text } from "@saleor/macaw-ui/next";
import React from "react";

export const MountingPoint = () => {
  return (
    <Box display="flex" gap={3} paddingX={4} paddingY={5} alignItems="center">
      <Box height={12} width={12}>
        <img src={logo} alt="logo" />
      </Box>
      <Text variant="bodyStrong" size="small">
        Retrader Dashboard
      </Text>
    </Box>
  );
};
