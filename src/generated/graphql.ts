import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date */
  Date: any;
  /** DateTime */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type Exhibition = _Document &
  _Linkable & {
    __typename?: "Exhibition";
    title?: Maybe<Scalars["String"]>;
    subtitle?: Maybe<Scalars["Json"]>;
    main_image?: Maybe<Scalars["Json"]>;
    secondary_image?: Maybe<Scalars["Json"]>;
    start_date?: Maybe<Scalars["Date"]>;
    end_date?: Maybe<Scalars["Date"]>;
    body?: Maybe<Array<ExhibitionBody>>;
    body1?: Maybe<Array<ExhibitionBody1>>;
    _meta: Meta;
    _linkType?: Maybe<Scalars["String"]>;
  };

export type ExhibitionBody =
  | ExhibitionBodyQuote
  | ExhibitionBodyText
  | ExhibitionBodyImage_On_Left
  | ExhibitionBodySlider;

export type ExhibitionBody1 = ExhibitionBody1Gallery_Image;

export type ExhibitionBody1Gallery_Image = {
  __typename?: "ExhibitionBody1Gallery_image";
  type?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  primary?: Maybe<ExhibitionBody1Gallery_ImagePrimary>;
};

export type ExhibitionBody1Gallery_ImagePrimary = {
  __typename?: "ExhibitionBody1Gallery_imagePrimary";
  image?: Maybe<Scalars["Json"]>;
  work_title?: Maybe<Scalars["String"]>;
};

export type ExhibitionBodyImage_On_Left = {
  __typename?: "ExhibitionBodyImage_on_left";
  type?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  primary?: Maybe<ExhibitionBodyImage_On_LeftPrimary>;
};

export type ExhibitionBodyImage_On_LeftPrimary = {
  __typename?: "ExhibitionBodyImage_on_leftPrimary";
  image?: Maybe<Scalars["Json"]>;
  text?: Maybe<Scalars["Json"]>;
};

export type ExhibitionBodyQuote = {
  __typename?: "ExhibitionBodyQuote";
  type?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  primary?: Maybe<ExhibitionBodyQuotePrimary>;
};

export type ExhibitionBodyQuotePrimary = {
  __typename?: "ExhibitionBodyQuotePrimary";
  text?: Maybe<Scalars["Json"]>;
  author?: Maybe<Scalars["String"]>;
};

export type ExhibitionBodySlider = {
  __typename?: "ExhibitionBodySlider";
  type?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  fields?: Maybe<Array<ExhibitionBodySliderFields>>;
};

export type ExhibitionBodySliderFields = {
  __typename?: "ExhibitionBodySliderFields";
  image?: Maybe<Scalars["Json"]>;
  description?: Maybe<Scalars["String"]>;
};

export type ExhibitionBodyText = {
  __typename?: "ExhibitionBodyText";
  type?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  primary?: Maybe<ExhibitionBodyTextPrimary>;
};

export type ExhibitionBodyTextPrimary = {
  __typename?: "ExhibitionBodyTextPrimary";
  text?: Maybe<Scalars["Json"]>;
};

/** A connection to a list of items. */
export type ExhibitionConnectionConnection = {
  __typename?: "ExhibitionConnectionConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ExhibitionConnectionEdge>>>;
  totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type ExhibitionConnectionEdge = {
  __typename?: "ExhibitionConnectionEdge";
  /** The item at the end of the edge. */
  node: Exhibition;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

export type Homepage = _Document &
  _Linkable & {
    __typename?: "Homepage";
    active_exhibitions?: Maybe<Array<HomepageActive_Exhibitions>>;
    _meta: Meta;
    _linkType?: Maybe<Scalars["String"]>;
  };

export type HomepageActive_Exhibitions = {
  __typename?: "HomepageActive_exhibitions";
  exhibition?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type HomepageConnectionConnection = {
  __typename?: "HomepageConnectionConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomepageConnectionEdge>>>;
  totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type HomepageConnectionEdge = {
  __typename?: "HomepageConnectionEdge";
  /** The item at the end of the edge. */
  node: Homepage;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

export type Meta = {
  __typename?: "Meta";
  /** The id of the document. */
  id: Scalars["String"];
  /** The uid of the document. */
  uid?: Maybe<Scalars["String"]>;
  /** The type of the document. */
  type: Scalars["String"];
  /** The tags of the document. */
  tags: Array<Scalars["String"]>;
  /** The language of the document. */
  lang: Scalars["String"];
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars["DateTime"]>;
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars["DateTime"]>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  _allDocuments: _DocumentConnection;
  exhibition?: Maybe<Exhibition>;
  allExhibitions: ExhibitionConnectionConnection;
  allHomepages: HomepageConnectionConnection;
};

export type Query_AllDocumentsArgs = {
  sortBy?: Maybe<SortDocumentsBy>;
  id?: Maybe<Scalars["String"]>;
  id_in?: Maybe<Array<Scalars["String"]>>;
  uid?: Maybe<Scalars["String"]>;
  uid_in?: Maybe<Array<Scalars["String"]>>;
  lang?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Scalars["String"]>>;
  tags_in?: Maybe<Array<Scalars["String"]>>;
  type?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  firstPublicationDate?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  fulltext?: Maybe<Scalars["String"]>;
  similar?: Maybe<Similar>;
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryExhibitionArgs = {
  uid: Scalars["String"];
  lang: Scalars["String"];
};

export type QueryAllExhibitionsArgs = {
  sortBy?: Maybe<SortExhibitiony>;
  id?: Maybe<Scalars["String"]>;
  id_in?: Maybe<Array<Scalars["String"]>>;
  uid?: Maybe<Scalars["String"]>;
  uid_in?: Maybe<Array<Scalars["String"]>>;
  lang?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Scalars["String"]>>;
  tags_in?: Maybe<Array<Scalars["String"]>>;
  type?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  firstPublicationDate?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  fulltext?: Maybe<Scalars["String"]>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereExhibition>;
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryAllHomepagesArgs = {
  sortBy?: Maybe<SortHomepagey>;
  id?: Maybe<Scalars["String"]>;
  id_in?: Maybe<Array<Scalars["String"]>>;
  uid?: Maybe<Scalars["String"]>;
  uid_in?: Maybe<Array<Scalars["String"]>>;
  lang?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Scalars["String"]>>;
  tags_in?: Maybe<Array<Scalars["String"]>>;
  type?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  firstPublicationDate?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  fulltext?: Maybe<Scalars["String"]>;
  similar?: Maybe<Similar>;
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type RelatedDocument = {
  __typename?: "RelatedDocument";
  /** The id of the document. */
  id: Scalars["String"];
  /** The uid of the document. */
  uid?: Maybe<Scalars["String"]>;
  /** The type of the document. */
  type: Scalars["String"];
  /** The language of the document. */
  lang: Scalars["String"];
};

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
  MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
  MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
  MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
}

export enum SortExhibitiony {
  MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
  MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
  MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
  MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  SubtitleAsc = "subtitle_ASC",
  SubtitleDesc = "subtitle_DESC",
  StartDateAsc = "start_date_ASC",
  StartDateDesc = "start_date_DESC",
  EndDateAsc = "end_date_ASC",
  EndDateDesc = "end_date_DESC",
}

export enum SortHomepagey {
  MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
  MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
  MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
  MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
}

export type WhereExhibition = {
  title?: Maybe<Scalars["String"]>;
  title_fulltext?: Maybe<Scalars["String"]>;
  /** subtitle */
  subtitle_fulltext?: Maybe<Scalars["String"]>;
  /** start_date */
  start_date?: Maybe<Scalars["Date"]>;
  /** start_date */
  start_date_before?: Maybe<Scalars["Date"]>;
  /** start_date */
  start_date_after?: Maybe<Scalars["Date"]>;
  /** end_date */
  end_date?: Maybe<Scalars["Date"]>;
  /** end_date */
  end_date_before?: Maybe<Scalars["Date"]>;
  /** end_date */
  end_date_after?: Maybe<Scalars["Date"]>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: "_DocumentConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: "_DocumentEdge";
  /** The item at the end of the edge. */
  node: _Document;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: "_ExternalLink";
  url: Scalars["String"];
  target?: Maybe<Scalars["String"]>;
  _linkType?: Maybe<Scalars["String"]>;
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: "_FileLink";
  name: Scalars["String"];
  url: Scalars["String"];
  size: Scalars["Long"];
  _linkType?: Maybe<Scalars["String"]>;
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: "_ImageLink";
  name: Scalars["String"];
  url: Scalars["String"];
  size: Scalars["Long"];
  height: Scalars["Int"];
  width: Scalars["Int"];
  _linkType?: Maybe<Scalars["String"]>;
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars["String"]>;
};

export type Similar = {
  documentId: Scalars["String"];
  max: Scalars["Int"];
};

export type AllExhibitionIdsQueryVariables = Exact<{ [key: string]: never }>;

export type AllExhibitionIdsQuery = { __typename?: "Query" } & {
  allExhibitions: { __typename?: "ExhibitionConnectionConnection" } & {
    edges?: Maybe<
      Array<
        Maybe<
          { __typename?: "ExhibitionConnectionEdge" } & {
            node: { __typename?: "Exhibition" } & {
              _meta: { __typename?: "Meta" } & Pick<Meta, "uid">;
            };
          }
        >
      >
    >;
  };
};

export type GetExhibitionQueryVariables = Exact<{
  uid: Scalars["String"];
}>;

export type GetExhibitionQuery = { __typename?: "Query" } & {
  exhibition?: Maybe<
    { __typename?: "Exhibition" } & Pick<Exhibition, "main_image" | "title"> & {
        body?: Maybe<
          Array<
            | ({ __typename?: "ExhibitionBodyQuote" } & {
                primary?: Maybe<
                  { __typename?: "ExhibitionBodyQuotePrimary" } & Pick<
                    ExhibitionBodyQuotePrimary,
                    "text" | "author"
                  >
                >;
              })
            | ({ __typename?: "ExhibitionBodyText" } & {
                primary?: Maybe<
                  { __typename?: "ExhibitionBodyTextPrimary" } & Pick<
                    ExhibitionBodyTextPrimary,
                    "text"
                  >
                >;
              })
            | { __typename?: "ExhibitionBodyImage_on_left" }
            | { __typename?: "ExhibitionBodySlider" }
          >
        >;
      }
  >;
};

export type HomepageQueryVariables = Exact<{ [key: string]: never }>;

export type HomepageQuery = { __typename?: "Query" } & {
  allHomepages: { __typename?: "HomepageConnectionConnection" } & {
    edges?: Maybe<
      Array<
        Maybe<
          { __typename?: "HomepageConnectionEdge" } & {
            node: { __typename?: "Homepage" } & {
              active_exhibitions?: Maybe<
                Array<
                  { __typename?: "HomepageActive_exhibitions" } & {
                    exhibition?: Maybe<
                      | ({ __typename?: "Exhibition" } & Pick<
                          Exhibition,
                          | "title"
                          | "subtitle"
                          | "main_image"
                          | "secondary_image"
                          | "start_date"
                          | "end_date"
                        > & {
                            _meta: { __typename?: "Meta" } & Pick<Meta, "uid">;
                          })
                      | { __typename?: "Homepage" }
                      | { __typename?: "_ExternalLink" }
                      | { __typename?: "_FileLink" }
                      | { __typename?: "_ImageLink" }
                    >;
                  }
                >
              >;
            };
          }
        >
      >
    >;
  };
};

export type MenuQueryVariables = Exact<{ [key: string]: never }>;

export type MenuQuery = { __typename?: "Query" } & {
  allHomepages: { __typename?: "HomepageConnectionConnection" } & {
    edges?: Maybe<
      Array<
        Maybe<
          { __typename?: "HomepageConnectionEdge" } & {
            node: { __typename?: "Homepage" } & {
              active_exhibitions?: Maybe<
                Array<
                  { __typename?: "HomepageActive_exhibitions" } & {
                    exhibition?: Maybe<
                      | ({ __typename?: "Exhibition" } & Pick<
                          Exhibition,
                          "title" | "main_image"
                        > & {
                            _meta: { __typename?: "Meta" } & Pick<Meta, "uid">;
                          })
                      | { __typename?: "Homepage" }
                      | { __typename?: "_ExternalLink" }
                      | { __typename?: "_FileLink" }
                      | { __typename?: "_ImageLink" }
                    >;
                  }
                >
              >;
            };
          }
        >
      >
    >;
  };
};

export const AllExhibitionIdsDocument = gql`
  query AllExhibitionIds {
    allExhibitions {
      edges {
        node {
          _meta {
            uid
          }
        }
      }
    }
  }
`;

/**
 * __useAllExhibitionIdsQuery__
 *
 * To run a query within a React component, call `useAllExhibitionIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllExhibitionIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllExhibitionIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllExhibitionIdsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllExhibitionIdsQuery,
    AllExhibitionIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllExhibitionIdsQuery, AllExhibitionIdsQueryVariables>(
    AllExhibitionIdsDocument,
    options
  );
}
export function useAllExhibitionIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllExhibitionIdsQuery,
    AllExhibitionIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AllExhibitionIdsQuery,
    AllExhibitionIdsQueryVariables
  >(AllExhibitionIdsDocument, options);
}
export type AllExhibitionIdsQueryHookResult = ReturnType<
  typeof useAllExhibitionIdsQuery
>;
export type AllExhibitionIdsLazyQueryHookResult = ReturnType<
  typeof useAllExhibitionIdsLazyQuery
>;
export type AllExhibitionIdsQueryResult = Apollo.QueryResult<
  AllExhibitionIdsQuery,
  AllExhibitionIdsQueryVariables
>;
export const GetExhibitionDocument = gql`
  query GetExhibition($uid: String!) {
    exhibition(uid: $uid, lang: "en-us") {
      main_image
      title
      body {
        ... on ExhibitionBodyText {
          primary {
            text
          }
        }
        ... on ExhibitionBodyQuote {
          primary {
            text
            author
          }
        }
      }
    }
  }
`;

/**
 * __useGetExhibitionQuery__
 *
 * To run a query within a React component, call `useGetExhibitionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExhibitionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExhibitionQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useGetExhibitionQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetExhibitionQuery,
    GetExhibitionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetExhibitionQuery, GetExhibitionQueryVariables>(
    GetExhibitionDocument,
    options
  );
}
export function useGetExhibitionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExhibitionQuery,
    GetExhibitionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetExhibitionQuery, GetExhibitionQueryVariables>(
    GetExhibitionDocument,
    options
  );
}
export type GetExhibitionQueryHookResult = ReturnType<
  typeof useGetExhibitionQuery
>;
export type GetExhibitionLazyQueryHookResult = ReturnType<
  typeof useGetExhibitionLazyQuery
>;
export type GetExhibitionQueryResult = Apollo.QueryResult<
  GetExhibitionQuery,
  GetExhibitionQueryVariables
>;
export const HomepageDocument = gql`
  query Homepage {
    allHomepages {
      edges {
        node {
          active_exhibitions {
            exhibition {
              ... on Exhibition {
                _meta {
                  uid
                }
                title
                subtitle
                main_image
                secondary_image
                start_date
                end_date
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useHomepageQuery__
 *
 * To run a query within a React component, call `useHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageQuery(
  baseOptions?: Apollo.QueryHookOptions<HomepageQuery, HomepageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HomepageQuery, HomepageQueryVariables>(
    HomepageDocument,
    options
  );
}
export function useHomepageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomepageQuery,
    HomepageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HomepageQuery, HomepageQueryVariables>(
    HomepageDocument,
    options
  );
}
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>;
export type HomepageLazyQueryHookResult = ReturnType<
  typeof useHomepageLazyQuery
>;
export type HomepageQueryResult = Apollo.QueryResult<
  HomepageQuery,
  HomepageQueryVariables
>;
export const MenuDocument = gql`
  query Menu {
    allHomepages {
      edges {
        node {
          active_exhibitions {
            exhibition {
              ... on Exhibition {
                _meta {
                  uid
                }
                title
                main_image
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useMenuQuery__
 *
 * To run a query within a React component, call `useMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useMenuQuery(
  baseOptions?: Apollo.QueryHookOptions<MenuQuery, MenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
}
export function useMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MenuQuery, MenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MenuQuery, MenuQueryVariables>(
    MenuDocument,
    options
  );
}
export type MenuQueryHookResult = ReturnType<typeof useMenuQuery>;
export type MenuLazyQueryHookResult = ReturnType<typeof useMenuLazyQuery>;
export type MenuQueryResult = Apollo.QueryResult<MenuQuery, MenuQueryVariables>;
