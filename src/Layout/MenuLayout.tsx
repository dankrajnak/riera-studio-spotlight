import HamburgerMenu from "react-hamburger-menu";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ColorsA } from "../Utils/Colors";
import { MENU_PATH } from "../pages/menu";
import Footer from "../Components/Footer";

export const MENU_BUTTON_DIMENSIONS = {
  width: 50,
  height: 50,
} as const;

export const MENU_BUTTON_OFFSET = {
  top: 20,
  left: 20,
} as const;

const BACK_LINK_PARAM_NAME = "back";

const getBackParam = (router: NextRouter): string | null => {
  const back = router.query[BACK_LINK_PARAM_NAME];
  return Array.isArray(back) ? back[0] : back;
};

const getMenuLink = (router: NextRouter): string => {
  const currentPath = router.asPath;
  return `${MENU_PATH}?${BACK_LINK_PARAM_NAME}=${encodeURIComponent(
    currentPath
  )}`;
};

const MenuButton: React.FC<{ isOpen: boolean; backLink?: string | null }> = ({
  isOpen,
  backLink,
}) => {
  const router = useRouter();
  return (
    <>
      <Link
        href={isOpen ? backLink || "/" : getMenuLink(router)}
        as={isOpen ? undefined : MENU_PATH}
      >
        <a
          className={`menu-button flex items-center justify-center border-0 rounded-full bg-black-900 bg-opacity-90 ${
            isOpen ? "drop-shadow-md" : "drop-shadow-none"
          }`}
          style={{
            width: MENU_BUTTON_DIMENSIONS.width,
            height: MENU_BUTTON_DIMENSIONS.height,
          }}
        >
          <HamburgerMenu
            isOpen={isOpen}
            color="white"
            menuClicked={() => null}
            width={25}
            height={15}
          />
        </a>
      </Link>
    </>
  );
};

const MenuLayout: React.FC<{ menuIsOpen: boolean }> = ({
  children,
  menuIsOpen,
}) => {
  const back = getBackParam(useRouter());
  return (
    <>
      <div className="menu-holder">
        <MenuButton isOpen={menuIsOpen} backLink={back} />
      </div>
      {children}
      <style jsx>{`
        .menu-holder {
          position: fixed;
          top: ${MENU_BUTTON_OFFSET.top}px;
          left: ${MENU_BUTTON_OFFSET.left}px;
          z-index: 9999;
        }
      `}</style>
    </>
  );
};

export default MenuLayout;
