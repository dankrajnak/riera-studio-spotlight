import { AppProps } from "next/app";
import "../Styles/dist.css";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import MenuLayout from "../Layout/MenuLayout";
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
    <SimpleReactLightbox>
      <AnimateSharedLayout>
        {dontShowMenuButton ? (
          <Component {...otherPageProps} />
        ) : (
          <MenuLayout menuIsOpen={menuIsOpen}>
            <Component {...otherPageProps} />
          </MenuLayout>
        )}
      </AnimateSharedLayout>
    </SimpleReactLightbox>
  );
}

export default MyApp;
