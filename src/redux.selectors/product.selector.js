const getStoreReducer = (state) => state.storeReducer;
const getProductReducer = (state) => state.productReducer;

export const getSiteData = (state) => getStoreReducer(state).siteData;

export const getProductList = (state) => getProductReducer(state).productsList;
