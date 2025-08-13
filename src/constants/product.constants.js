import { createRequestActionTypes } from "./store.constants";

export const ProductListingActionTypes = {
    get_prouctList: createRequestActionTypes('GET_PRODUCT_VIEW'),
    get_prouctView: createRequestActionTypes('GET_PRODUCT_VIEW'),
    get_productCategory: createRequestActionTypes('GET_PRODUCT_CATEGORY'),
    get_categoryBreadCrumbTrail: createRequestActionTypes('GET_CATEGORY_BREADCRUMB')
};

export const PRODUCT_LIST_VIEW_URL = "/rest/products"