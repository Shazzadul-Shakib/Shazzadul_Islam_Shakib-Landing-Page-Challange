const CartedProduct = ({ product }) => {

  return (
    <main className=" w-[90%] mx-auto bg-crdBD3L1 my-4 flex items-center gap-[30px]">
      <div className="h-[100px] w-[100px] bg-crdBD1 flex justify-center  items-center p-2 rounded">
        <img
          src={product.productImage}
          alt="Carted product image"
        />
      </div>
      <div>
        <h1 className=" text-xl font-semibold text-txtD1">
          {product.productName}
        </h1>
        {product.productSale > 0 ? (
          <h1 className=" font-semibold text-txtD2">
            ${product.productAfterSalePrice}
          </h1>
        ) : (
          <h1 className=" font-semibold text-txtD2">${product.productPrice}</h1>
        )}
      </div>
    </main>
  );
};

export default CartedProduct;
