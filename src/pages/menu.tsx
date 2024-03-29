import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import queryString, { Stringifiable } from "query-string";
import homeIcon from "../../public/homeIcon.svg";
import Plane from "../Layout/Plane";
import { RageServiceReturn } from "../PrismicRage/shared";
import Colors from "../Utils/Colors";
import LinkHelper from "../Utils/LinkHelper";
import getMenu from "../PrismicRage/getMenu";
import {
  MENU_BUTTON_DIMENSIONS,
  MENU_BUTTON_OFFSET,
} from "../Layout/MenuLayout";
import SEO from "../Utils/SEO";
import SVGBlur from "../Components/SVGBlur";
import TitleText from "../Components/TitleText";

const addParams = (url: string, params: Record<string, Stringifiable>) => {
  const parsedUrl = queryString.parseUrl(url);
  return queryString.stringifyUrl({
    ...parsedUrl,
    query: { ...parsedUrl.query, ...params },
  });
};

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
              <div className="w-full h-full opacity-50">
                <SVGBlur
                  svg={exhibition.image.blurs.svg}
                  img={{
                    ...exhibition.image.blurs.img,
                    src: addParams(exhibition.image.blurs.img.src, {
                      con: 60,
                      sat: -80,
                      exp: -5,
                      vib: 50,
                    }),
                  }}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  fill
                />
              </div>
            </Plane>
            <Plane>
              <div className="flex items-center justify-start overflow-visible w-full h-full p-4">
                <TitleText
                  text={exhibition.title}
                  className="lg:whitespace-nowrap overflow-x-hidden overflow-y-visible overflow-ellipsis"
                />
              </div>
            </Plane>
          </a>
        </Link>
      ))}
    </div>
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
          <Link href="/" replace>
            <a className="home-holder">
              <Image src={homeIcon} alt="Home" width={25} height={30} />
            </a>
          </Link>
        </div>
        <div className="menu-container bg-black-900">
          <MenuContent exhibitions={exhibitions} />
        </div>
      </motion.div>

      <style global jsx>{`
        .home-container {
          top: ${MENU_BUTTON_OFFSET.top}px;
          position: fixed;
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
        }
      `}</style>
    </>
  );
};

export const getStaticProps = async ({ preview, previewData }) => ({
  props: { exhibitions: await getMenu(preview ? previewData : null) },
  revalidate: 1,
});

export default Menu;
