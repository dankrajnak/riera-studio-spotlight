import { AppProps } from "next/app";
import "../Styles/dist.css";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import MenuLayout from "../Layout/MenuLayout";
import ExitPreviewButton from "../Components/ExitPreview";
import { MENU_PATH } from "./menu";

export function withDontShowMenuButton<T>(
  props: T
): T | { dontShowMenu: true } {
  return {
    ...props,
    dontShowMenuButton: true,
  };
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const menuIsOpen = router.pathname === MENU_PATH;
  const { dontShowMenuButton, ...otherPageProps } = pageProps;
  return (
    <AnimateSharedLayout>
      {dontShowMenuButton ? (
        <Component {...otherPageProps} />
      ) : (
        <MenuLayout menuIsOpen={menuIsOpen}>
          <Component {...otherPageProps} />
        </MenuLayout>
      )}
      <ExitPreviewButton />
    </AnimateSharedLayout>
  );
}

export default MyApp;
