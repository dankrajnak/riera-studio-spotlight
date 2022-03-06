import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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
    _linkType?: Maybe<Scalars["String"]>;
    _meta: Meta;
    body?: Maybe<Array<ExhibitionBody>>;
    body1?: Maybe<Array<ExhibitionBody1>>;
    main_image?: Maybe<Scalars["Json"]>;
    title?: Maybe<Scalars["String"]>;
  };

export type ExhibitionBody =
  | ExhibitionBodyImage
  | ExhibitionBodyImage_With_Text
  | ExhibitionBodyQuote
  | ExhibitionBodyText
  | ExhibitionBodyText_By_Text;

export type ExhibitionBody1 = ExhibitionBody1Gallery_Image;

export type ExhibitionBody1Gallery_Image = {
  __typename?: "ExhibitionBody1Gallery_image";
  label?: Maybe<Scalars["String"]>;
  primary?: Maybe<ExhibitionBody1Gallery_ImagePrimary>;
  type?: Maybe<Scalars["String"]>;
};

export type ExhibitionBody1Gallery_ImagePrimary = {
  __typename?: "ExhibitionBody1Gallery_imagePrimary";
  image?: Maybe<Scalars["Json"]>;
  work_title?: Maybe<Scalars["String"]>;
};

export type ExhibitionBodyImage = {
  __typename?: "ExhibitionBodyImage";
  label?: Maybe<Scalars["String"]>;
  primary?: Maybe<ExhibitionBodyImagePrimary>;
  type?: Maybe<Scalars["String"]>;
};

export type ExhibitionBodyImagePrimary = {
  __typename?: "ExhibitionBodyImagePrimary";
  image?: Maybe<Scalars["Json"]>;
};

export type ExhibitionBodyImage_With_Text = {
  __typename?: "ExhibitionBodyImage_with_text";
  label?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  variation?: Maybe<ExhibitionBodyImage_With_TextVariation>;
};

export type ExhibitionBodyImage_With_TextDefaultSlice = {
  __typename?: "ExhibitionBodyImage_with_textDefaultSlice";
  primary?: Maybe<ExhibitionBodyImage_With_TextDefaultSlicePrimary>;
};

export type ExhibitionBodyImage_With_TextDefaultSlicePrimary = {
  __typename?: "ExhibitionBodyImage_with_textDefaultSlicePrimary";
  description?: Maybe<Scalars["Json"]>;
  image?: Maybe<Scalars["Json"]>;
};

export type ExhibitionBodyImage_With_TextImageleft = {
  __typename?: "ExhibitionBodyImage_with_textImageleft";
  primary?: Maybe<ExhibitionBodyImage_With_TextImageleftPrimary>;
};

export type ExhibitionBodyImage_With_TextImageleftPrimary = {
  __typename?: "ExhibitionBodyImage_with_textImageleftPrimary";
  description?: Maybe<Scalars["Json"]>;
  image?: Maybe<Scalars["Json"]>;
};

export type ExhibitionBodyImage_With_TextVariation =
  | ExhibitionBodyImage_With_TextDefaultSlice
  | ExhibitionBodyImage_With_TextImageleft;

export type ExhibitionBodyQuote = {
  __typename?: "ExhibitionBodyQuote";
  label?: Maybe<Scalars["String"]>;
  primary?: Maybe<ExhibitionBodyQuotePrimary>;
  type?: Maybe<Scalars["String"]>;
};

export type ExhibitionBodyQuotePrimary = {
  __typename?: "ExhibitionBodyQuotePrimary";
  author?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["Json"]>;
};

export type ExhibitionBodyText = {
  __typename?: "ExhibitionBodyText";
  label?: Maybe<Scalars["String"]>;
  primary?: Maybe<ExhibitionBodyTextPrimary>;
  type?: Maybe<Scalars["String"]>;
};

export type ExhibitionBodyTextPrimary = {
  __typename?: "ExhibitionBodyTextPrimary";
  text?: Maybe<Scalars["Json"]>;
};

export type ExhibitionBodyText_By_Text = {
  __typename?: "ExhibitionBodyText_by_text";
  label?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  variation?: Maybe<ExhibitionBodyText_By_TextVariation>;
};

export type ExhibitionBodyText_By_TextDefaultSlice = {
  __typename?: "ExhibitionBodyText_by_textDefaultSlice";
  primary?: Maybe<ExhibitionBodyText_By_TextDefaultSlicePrimary>;
};

export type ExhibitionBodyText_By_TextDefaultSlicePrimary = {
  __typename?: "ExhibitionBodyText_by_textDefaultSlicePrimary";
  left?: Maybe<Scalars["Json"]>;
  right?: Maybe<Scalars["Json"]>;
};

export type ExhibitionBodyText_By_TextVariation =
  ExhibitionBodyText_By_TextDefaultSlice;

/** A connection to a list of items. */
export type ExhibitionConnectionConnection = {
  __typename?: "ExhibitionConnectionConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ExhibitionConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type ExhibitionConnectionEdge = {
  __typename?: "ExhibitionConnectionEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Exhibition;
};

export type Homepage = _Document &
  _Linkable & {
    __typename?: "Homepage";
    _linkType?: Maybe<Scalars["String"]>;
    _meta: Meta;
    active_exhibitions?: Maybe<Array<HomepageActive_Exhibitions>>;
  };

export type HomepageActive_Exhibitions = {
  __typename?: "HomepageActive_exhibitions";
  exhibition?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type HomepageConnectionConnection = {
  __typename?: "HomepageConnectionConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomepageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type HomepageConnectionEdge = {
  __typename?: "HomepageConnectionEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Homepage;
};

export type Meta = {
  __typename?: "Meta";
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars["DateTime"]>;
  /** The id of the document. */
  id: Scalars["String"];
  /** The language of the document. */
  lang: Scalars["String"];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars["DateTime"]>;
  /** The tags of the document. */
  tags: Array<Scalars["String"]>;
  /** The type of the document. */
  type: Scalars["String"];
  /** The uid of the document. */
  uid?: Maybe<Scalars["String"]>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  _allDocuments: _DocumentConnection;
  allExhibitions: ExhibitionConnectionConnection;
  allHomepages: HomepageConnectionConnection;
  exhibition?: Maybe<Exhibition>;
};

export type Query_AllDocumentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  firstPublicationDate?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  fulltext?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  id_in?: Maybe<Array<Scalars["String"]>>;
  lang?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  lastPublicationDate?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortDocumentsBy>;
  tags?: Maybe<Array<Scalars["String"]>>;
  tags_in?: Maybe<Array<Scalars["String"]>>;
  type?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
};

export type QueryAllExhibitionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  firstPublicationDate?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  fulltext?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  id_in?: Maybe<Array<Scalars["String"]>>;
  lang?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  lastPublicationDate?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortExhibitiony>;
  tags?: Maybe<Array<Scalars["String"]>>;
  tags_in?: Maybe<Array<Scalars["String"]>>;
  uid?: Maybe<Scalars["String"]>;
  uid_in?: Maybe<Array<Scalars["String"]>>;
  where?: Maybe<WhereExhibition>;
};

export type QueryAllHomepagesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  firstPublicationDate?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  firstPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  fulltext?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  id_in?: Maybe<Array<Scalars["String"]>>;
  lang?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  lastPublicationDate?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_after?: Maybe<Scalars["DateTime"]>;
  lastPublicationDate_before?: Maybe<Scalars["DateTime"]>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortHomepagey>;
  tags?: Maybe<Array<Scalars["String"]>>;
  tags_in?: Maybe<Array<Scalars["String"]>>;
  uid?: Maybe<Scalars["String"]>;
  uid_in?: Maybe<Array<Scalars["String"]>>;
  where?: Maybe<WhereHomepage>;
};

export type QueryExhibitionArgs = {
  lang: Scalars["String"];
  uid: Scalars["String"];
};

export type RelatedDocument = {
  __typename?: "RelatedDocument";
  /** The id of the document. */
  id: Scalars["String"];
  /** The language of the document. */
  lang: Scalars["String"];
  /** The type of the document. */
  type: Scalars["String"];
  /** The uid of the document. */
  uid?: Maybe<Scalars["String"]>;
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
};

export type WhereHomepage = {
  active_exhibitions?: Maybe<WhereHomepageActive_Exhibitions>;
};

export type WhereHomepageActive_Exhibitions = {
  /** exhibition */
  exhibition?: Maybe<Scalars["String"]>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: "_DocumentConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: "_DocumentEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: "_ExternalLink";
  _linkType?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: "_FileLink";
  _linkType?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  size: Scalars["Long"];
  url: Scalars["String"];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: "_ImageLink";
  _linkType?: Maybe<Scalars["String"]>;
  height: Scalars["Int"];
  name: Scalars["String"];
  size: Scalars["Long"];
  url: Scalars["String"];
  width: Scalars["Int"];
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

export type AllExhibitionIdsQuery = {
  __typename?: "Query";
  allExhibitions: {
    __typename?: "ExhibitionConnectionConnection";
    edges?:
      | Array<
          | {
              __typename?: "ExhibitionConnectionEdge";
              node: {
                __typename?: "Exhibition";
                _meta: { __typename?: "Meta"; uid?: string | null | undefined };
              };
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type GetExhibitionQueryVariables = Exact<{
  uid: Scalars["String"];
}>;

export type GetExhibitionQuery = {
  __typename?: "Query";
  exhibition?:
    | {
        __typename?: "Exhibition";
        main_image?: any | null | undefined;
        title?: string | null | undefined;
        body?:
          | Array<
              | {
                  __typename?: "ExhibitionBodyImage";
                  primary?:
                    | {
                        __typename?: "ExhibitionBodyImagePrimary";
                        image?: any | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | {
                  __typename?: "ExhibitionBodyImage_with_text";
                  type?: string | null | undefined;
                  variation?:
                    | {
                        __typename?: "ExhibitionBodyImage_with_textDefaultSlice";
                        primary?:
                          | {
                              __typename?: "ExhibitionBodyImage_with_textDefaultSlicePrimary";
                              image?: any | null | undefined;
                              description?: any | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | {
                        __typename?: "ExhibitionBodyImage_with_textImageleft";
                        primary?:
                          | {
                              __typename?: "ExhibitionBodyImage_with_textImageleftPrimary";
                              image?: any | null | undefined;
                              description?: any | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
              | {
                  __typename?: "ExhibitionBodyQuote";
                  primary?:
                    | {
                        __typename?: "ExhibitionBodyQuotePrimary";
                        text?: any | null | undefined;
                        author?: string | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | {
                  __typename?: "ExhibitionBodyText";
                  primary?:
                    | {
                        __typename?: "ExhibitionBodyTextPrimary";
                        text?: any | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | {
                  __typename?: "ExhibitionBodyText_by_text";
                  variation?:
                    | {
                        __typename?: "ExhibitionBodyText_by_textDefaultSlice";
                        primary?:
                          | {
                              __typename?: "ExhibitionBodyText_by_textDefaultSlicePrimary";
                              left?: any | null | undefined;
                              right?: any | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
            >
          | null
          | undefined;
        body1?:
          | Array<{
              __typename?: "ExhibitionBody1Gallery_image";
              primary?:
                | {
                    __typename?: "ExhibitionBody1Gallery_imagePrimary";
                    image?: any | null | undefined;
                    work_title?: string | null | undefined;
                  }
                | null
                | undefined;
            }>
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type HomepageQueryVariables = Exact<{ [key: string]: never }>;

export type HomepageQuery = {
  __typename?: "Query";
  allHomepages: {
    __typename?: "HomepageConnectionConnection";
    edges?:
      | Array<
          | {
              __typename?: "HomepageConnectionEdge";
              node: {
                __typename?: "Homepage";
                active_exhibitions?:
                  | Array<{
                      __typename?: "HomepageActive_exhibitions";
                      exhibition?:
                        | {
                            __typename?: "Exhibition";
                            title?: string | null | undefined;
                            main_image?: any | null | undefined;
                            _meta: {
                              __typename?: "Meta";
                              uid?: string | null | undefined;
                            };
                          }
                        | { __typename?: "Homepage" }
                        | { __typename?: "_ExternalLink" }
                        | { __typename?: "_FileLink" }
                        | { __typename?: "_ImageLink" }
                        | null
                        | undefined;
                    }>
                  | null
                  | undefined;
              };
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type MenuQueryVariables = Exact<{ [key: string]: never }>;

export type MenuQuery = {
  __typename?: "Query";
  allHomepages: {
    __typename?: "HomepageConnectionConnection";
    edges?:
      | Array<
          | {
              __typename?: "HomepageConnectionEdge";
              node: {
                __typename?: "Homepage";
                active_exhibitions?:
                  | Array<{
                      __typename?: "HomepageActive_exhibitions";
                      exhibition?:
                        | {
                            __typename?: "Exhibition";
                            title?: string | null | undefined;
                            main_image?: any | null | undefined;
                            _meta: {
                              __typename?: "Meta";
                              uid?: string | null | undefined;
                            };
                          }
                        | { __typename?: "Homepage" }
                        | { __typename?: "_ExternalLink" }
                        | { __typename?: "_FileLink" }
                        | { __typename?: "_ImageLink" }
                        | null
                        | undefined;
                    }>
                  | null
                  | undefined;
              };
            }
          | null
          | undefined
        >
      | null
      | undefined;
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
        ... on ExhibitionBodyImage {
          primary {
            image
          }
        }
        ... on ExhibitionBodyText_by_text {
          variation {
            ... on ExhibitionBodyText_by_textDefaultSlice {
              primary {
                left
                right
              }
            }
          }
        }
        ... on ExhibitionBodyImage_with_text {
          type
          variation {
            ... on ExhibitionBodyImage_with_textDefaultSlice {
              primary {
                image
                description
              }
            }
            ... on ExhibitionBodyImage_with_textImageleft {
              primary {
                image
                description
              }
            }
          }
        }
      }
      body1 {
        ... on ExhibitionBody1Gallery_image {
          primary {
            image
            work_title
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
