import DrawerAppBar from "./components/mui/DrawerAppBar";
import BottomNav from "./components/mui/BottomNav";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { styled } from "@mui/system";
import { Suspense, useEffect } from "react";
import PWABadge from "./PWABadge";
import { theme } from "./styles/theme";

import { Outlet } from "react-router-dom";

import { Networks, Wallet, XRPLClient } from "@nice-xrpl/react-xrpl";

const RootContainer = styled(Box)({
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  padding: 0,
});

const ContentBox = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  overflow: "hidden",
  marginTop: "56px",
  marginBottom: "56px",
});

function App() {
  useEffect(() => {}, []);
  return (
    <XRPLClient network={Networks.Testnet}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RootContainer>
            <Wallet seed="sEdSuggZESkLQaECpNwdHf4AybmHZzC">
              <DrawerAppBar />
            </Wallet>
            <ContentBox>
              {/* 여기에 콘텐츠를 추가하세요 */}
              <Outlet />
            </ContentBox>
            <BottomNav />
            <PWABadge />
          </RootContainer>
        </ThemeProvider>
      </Suspense>
    </XRPLClient>
  );
}

export default App;
