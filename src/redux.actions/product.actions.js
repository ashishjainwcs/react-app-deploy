import { ProductListingActionTypes, PRODUCT_LIST_VIEW_URL } from "../constants/product.constants";
import { actionCreator,jsonApiHeader,checkHttpStatus } from "../constants/store.constants";

export const GetProductListAction = () => {
    return (dispatch) => {
        dispatch(actionCreator(ProductListingActionTypes.get_prouctList.REQUEST));
        fetch(PRODUCT_LIST_VIEW_URL, {
            method: 'GET',
            headers: jsonApiHeader(),
        })
            .then(checkHttpStatus)
            .then(function (response) {
                console.log("response :::"+response);
                dispatch(actionCreator(ProductListingActionTypes.get_prouctList.SUCCESS, response));
            })
            .catch(function (error) {
                dispatch(actionCreator(ProductListingActionTypes.get_prouctList.FAILURE));
                console.log('error get_prouctList ..', error);
            });
    };
};