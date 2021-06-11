import { NextRouter } from "next/router";
import queryString from "query-string";

export default class LinkHelper {
  static getExhibitionLink = (uid: string): string => `/exhibition/${uid}`;

  static replaceQueryParams(
    newParams: Record<string, string | string[]>,
    router: NextRouter
  ): void {
    router.replace(
      queryString.stringifyUrl({ url: router.pathname, query: newParams })
    );
  }
}
