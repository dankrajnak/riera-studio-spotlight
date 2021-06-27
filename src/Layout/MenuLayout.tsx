import HamburgerMenu from "react-hamburger-menu";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ColorsA } from "../Utils/Colors";
import { MENU_PATH } from "../pages/menu";

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
        replace
        href={isOpen ? backLink || "/" : getMenuLink(router)}
        as={isOpen ? undefined : MENU_PATH}
      >
        <a className="menu-button">
          <HamburgerMenu
            isOpen={isOpen}
            color="white"
            menuClicked={() => null}
            width={25}
            height={15}
          />
        </a>
      </Link>
      <style jsx>{`
        .menu-button {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background-color: ${ColorsA.black(0.8)};
          border-radius: 30px;
          width: ${MENU_BUTTON_DIMENSIONS.width}px;
          height: ${MENU_BUTTON_DIMENSIONS.height}px;
        }
      `}</style>
      <style jsx>{`
        .menu-button {
          ${isOpen
            ? ""
            : `box-shadow: 0 1.8px 2.2px rgba(0, 0, 0, 0.31),
          0 4.3px 5.3px rgba(0, 0, 0, 0.223), 0 8.1px 10px rgba(0, 0, 0, 0.185),
          0 14.5px 17.9px rgba(0, 0, 0, 0.155),
          0 27.2px 33.4px rgba(0, 0, 0, 0.125), 0 65px 80px rgba(0, 0, 0, 0.087)`}
        }
      `}</style>
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
