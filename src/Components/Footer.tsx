import Link from "next/link";
import LinkHelper from "../Utils/LinkHelper";

type Props = {
  exhibitions: { id: string; title: string }[];
};
const Footer = ({ exhibitions }: Props) => {
  return (
    <footer className=" bg-black-300 border-t-black-500 border-t-1 w-full px-12 pt-5 pb-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        Contact
        <div>
          <a
            href="mailto:samuel.riera@rierastudioart.com"
            className="hover:underline font-thin"
          >
            samuel.riera@rierastudioart.com
          </a>
        </div>
      </div>
      <div>
        Exhibitions
        <ol>
          {exhibitions.map((exhibition, i) => (
            <li key={i} className="font-thin hover:underline">
              <Link href={LinkHelper.getExhibitionLink(exhibition.id)}>
                {exhibition.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </footer>
  );
};

export default Footer;
