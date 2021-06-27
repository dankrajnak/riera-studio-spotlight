import { AppProps } from "next/app";
import "../Styles/dist.css";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import MenuLayout from "../Layout/MenuLayout";
import { MENU_PATH } from "./menu";

function MyApp({ Component, pageProps, router }: AppProps) {
  const menuIsOpen = router.pathname === MENU_PATH;
  return (
    <AnimateSharedLayout>
      <MenuLayout menuIsOpen={menuIsOpen}>
        <Component {...pageProps} />
      </MenuLayout>
    </AnimateSharedLayout>
  );
}

export default MyApp;
