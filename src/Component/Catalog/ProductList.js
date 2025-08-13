import { getProductList } from "../../redux.selectors/product.selector";
import Product from "./Product";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetProductListAction } from "../../redux.actions/product.actions";

function ProductList() {
  const products = useSelector(getProductList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProductListAction());
  }, []);
  
  return (
    <>
      <div className="mt-10  p-4 bg-info bg-opacity-10 border border-info border-start-0 rounded-end register-form-margin">
        <div className="row mb-3 text-center">
          <div className="col-sm-12">
            <h1 className="mb-5">Product Listing</h1>
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {products &&
                products.map((product, index) => (
                  <Product
                    key={index}
                    productProp={product}
                    indexProp={index}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
