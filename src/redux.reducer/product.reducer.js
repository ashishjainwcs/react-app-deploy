import { ProductListingActionTypes } from "../constants/product.constants";

const initialState = {
    loading: false,
    productsList: null,
    productViewDetails: null,
    productCategoryDetails: null,
    breadCrumbTrail: null,
};


const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ProductListingActionTypes.get_prouctList.REQUEST:
            return {
                ...state,
                loading: true,
                productsList: null,
            };
        case ProductListingActionTypes.get_prouctList.SUCCESS:
            return {
                ...state,
                loading: false,
                productsList: payload,
            };
        case ProductListingActionTypes.get_prouctList.FAILURE:
            return {
                ...state,
                loading: false,
                productsList: null
            };
        default:
            return state;
    }
};

export {productReducer};