import Single from "../../src/components/Single/Single";
import { singleProduct } from "../../src/data";
const ProductsPage = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default ProductsPage;
