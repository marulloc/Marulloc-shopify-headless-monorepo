import { collectionWithoutSEOFragment } from '../fragments/collection';
import { productWithoutSEOFragment } from '../fragments/product';

export const getPredictiveSearchQuery = `
  query getPredictiveSearch($query: String!) {
    predictiveSearch(
      query: $query
      limit: 5
      limitScope: EACH
      searchableFields: [TITLE]
      types: [COLLECTION, PRODUCT]
    ) {
      products {
        ...product
      }
      collections {
        ...collection
      }
    }
  }
  ${collectionWithoutSEOFragment}
  ${productWithoutSEOFragment}
`;

export const getSearchResultQuery = `
  query getSearchResult($query: String!, $filters: [ProductFilter!], $sortKey: SearchSortKeys, $reverse: Boolean) {
    search(first: 16, query: $query, productFilters: $filters, types: [PRODUCT], sortKey: $sortKey, reverse: $reverse) {
      edges {
        node {
          ... on Product {
            ...product
          }
        }
      }
    }
  }
  ${productWithoutSEOFragment}
`;
