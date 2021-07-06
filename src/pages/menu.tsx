import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import homeIcon from "../../public/homeIcon.svg";
import Plane from "../Layout/Plane";
import { imgixLoader, RageServiceReturn } from "../PrismicRage/shared";
import Colors from "../Utils/Colors";
import LinkHelper from "../Utils/LinkHelper";
import getMenu from "../PrismicRage/getMenu";
import {
  MENU_BUTTON_DIMENSIONS,
  MENU_BUTTON_OFFSET,
} from "../Layout/MenuLayout";
import SEO from "../Utils/SEO";

export const MENU_PATH = "/menu";

const MenuContent: React.FC<{
  exhibitions: RageServiceReturn<typeof getMenu>;
}> = ({ exhibitions }) => (
  <>
    <div>
      {exhibitions.map((exhibition, i) => (
        <Link
          href={LinkHelper.getExhibitionLink(exhibition.slug)}
          key={i}
          replace
        >
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
                  src={exhibition.image.url + "?con=60&sat=-80&exp=-5&vib=50"}
                  layout="fill"
                  objectFit="cover"
                  loader={imgixLoader}
                  placeholder="blur"
                  blurDataURL={exhibition.image.blurDataURL}
                  alt=""
                />
              </div>
            </Plane>
            <Plane>
              <div className="title-holder">
                <h1 className="title-link">{exhibition.title}</h1>
              </div>
            </Plane>
          </a>
        </Link>
      ))}
    </div>
    <style jsx>{`
      .title-link {
        font-size: 6rem;
        font-family: "EB Garamond";
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
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

const Menu = ({
  exhibitions,
}: {
  exhibitions: RageServiceReturn<typeof getMenu>;
}) => {
  return (
    <>
      <SEO title="Menu" />
      <motion.div style={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="home-container">
          <Link href="/">
            <a className="home-holder">
              <Image src={homeIcon} alt="Home" width={25} height={30} />
            </a>
          </Link>
        </div>
        <div className="menu-container">
          <MenuContent exhibitions={exhibitions} />
        </div>
      </motion.div>

      <style global jsx>{`
        .home-container {
          top: ${MENU_BUTTON_OFFSET.top}px;
          position: absolute;
          z-index: 9100;
          width: ${MENU_BUTTON_DIMENSIONS.width};
          height: ${MENU_BUTTON_DIMENSIONS.height - 2}px;
          left: ${MENU_BUTTON_OFFSET.left + MENU_BUTTON_DIMENSIONS.width}px;
        }
        .home-holder {
          height: 100%;
          display: flex;
          align-items: center;
        }
        .menu-container {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9000;
          position: fixed;
          overflow-y: auto;
          padding: ${MENU_BUTTON_OFFSET.top +
            MENU_BUTTON_DIMENSIONS.height +
            20}px
            30px 0px 30px;
          background: ${Colors.black};
        }
      `}</style>
    </>
  );
};

export const getStaticProps = async () => ({
  props: { exhibitions: await getMenu() },
  revalidate: 1,
});

export default Menu;
