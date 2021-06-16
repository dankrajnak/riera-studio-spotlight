import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import Image from "next/image";
import Link from "next/link";
import Colors, { ColorsA } from "../Utils/Colors";
import { imgixLoader } from "../PrismicRage/shared";
import LinkHelper from "../Utils/LinkHelper";
import Plane from "./Plane";

const MENU_BUTTON_DIMENSIONS = {
  width: 50,
  height: 50,
} as const;

const MenuButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg: boolean | ((isOpen: boolean) => boolean)) => void;
}) => (
  <>
    <button className="menu-button" onClick={() => setIsOpen((o) => !o)}>
      <HamburgerMenu
        isOpen={isOpen}
        color="white"
        menuClicked={() => null}
        width={25}
        height={15}
      />
    </button>
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

const Menu: React.FC<{
  exhibitions: { title: string; slug: string; image: string }[];
}> = ({ exhibitions }) => (
  <>
    {exhibitions.map((exhibition) => (
      <Link href={LinkHelper.getExhibitionLink(exhibition.slug)}>
        <a
          style={{
            width: "100%",
            height: 220,
            marginBottom: 20,
            position: "relative",
            display: "block",
          }}
        >
          <Plane>
            <div className="image-holder">
              <Image
                src={exhibition.image + "?con=60&sat=-80&exp=-5&vib=50"}
                layout="fill"
                objectFit="cover"
                loader={imgixLoader}
              />
            </div>
          </Plane>
          <Plane>
            <div className="title-holder">
              <Link href={LinkHelper.getExhibitionLink(exhibition.slug || "3")}>
                <h1 className="title">{exhibition.title}</h1>
              </Link>
            </div>
          </Plane>
        </a>
      </Link>
    ))}
    <style jsx>{`
      .title {
        color: ${Colors.white};
        font-size: 6rem;
        font-family: "EB Garamond";
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
      }
      .title-holder,
      .image-holder {
        width: 100%;
        height: 100%;
      }
      .title-holder {
        display: flex;
        align-items: center;
      }
      .image-holder {
        opacity: 0.5;
      }
    `}</style>
  </>
);

const MENU_BUTTON_OFFSET = {
  top: 20,
  left: 20,
} as const;

const MenuLayout: React.FC<{
  exhibitions: { title: string; slug: string; image: string }[];
}> = ({ children, exhibitions }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="menu-holder">
        <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
      {isMenuOpen && (
        <div className="menu-container">
          <Menu exhibitions={exhibitions} />
        </div>
      )}

      {children}
      <style jsx>{`
        .menu-holder {
          position: fixed;
          top: ${MENU_BUTTON_OFFSET.top}px;
          left: ${MENU_BUTTON_OFFSET.left}px;
          z-index: 9999;
        }
        .menu-container {
          top: 0;
          left: 0;
          bottom: 0;
          z-index: 9000;
          position: fixed;
          width: 100%;
          overflow-y: auto;
          padding: ${MENU_BUTTON_OFFSET.top +
            MENU_BUTTON_DIMENSIONS.height +
            10}px
            30px 0px 30px;
          background: ${Colors.black};
        }
      `}</style>
    </>
  );
};

export default MenuLayout;
