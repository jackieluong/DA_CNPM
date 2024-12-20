import { useEffect, useState } from "react";
import ImgUpload from "../../components/FormInput/ImgUpload";
import InputGroup from "../../components/FormInput/InputGroup";
import SelectInput from "../../components/FormInput/SelectInput";
import TextInput from "../../components/FormInput/TextInput";
import { useNavigate } from "react-router-dom";
import { addProduct, updateProduct } from "../../services/ProductService";
import { colors, categories } from "../../utils/selectOptions";
// const categories = [
//   { value: "Casual Wear", label: "Casual Wear" },
//   { value: "Formal Wear", label: "Formal Wear" },
//   { value: "Sport Wear", label: "Sport Wear" },
// ];

// const sizes = [
//   { value: "S", label: "S" },
//   { value: "M", label: "M" },
//   { value: "L", label: "L" },
//   { value: "XL", label: "XL" },
//   { value: "2XL", label: "2XL" },
// ];

const initialProductState = {
  name: "",
  brand: "",
  category: "",
  quantity: "",
  description: "",
  price: "",
  imgUrl: "",
};

// const apiURL = "http://localhost/BTL/btl_web_core/temp_api/api.php/product";
function FormInfo({ productData, setProductData, selectedProduct }) {
  const [product, setProduct] = useState(initialProductState);

  const navigate = useNavigate();
  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  function handleChange(e) {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }
  function handleNavigate(path) {
    navigate(path);
    window.scrollTo(0, 0);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(product);

    try {
      if (selectedProduct) {
        const response = await updateProduct(
          selectedProduct.product_id,
          product
        );

        // if(!response.ok){
        //   const errorData = await response.json() // Ensure to extract JSON message
        //   throw new Error(
        //     `Failed to update product: ${errorData.message || response.statusText}`
        //   );
        // }

        const updatedProducts = productData.map((item) =>
          item.product_id === selectedProduct.product_id ? product : item
        );
        setProductData(updatedProducts);
        alert("Product updated successfully");
      } else {
        console.log(product);
        // Add new product to database

        const response = await addProduct(product);

        const newProduct = { ...product, product_id: response.newProductID };
        console.log(newProduct);
        // Add the new product to the start of productData
        setProductData((productData) => [newProduct, ...productData]);
        alert("Product added successfully");
      }

      setProduct(initialProductState);
      handleNavigate("/admin/products/list");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred: " + error.message);
    }
  }
  function handleReset(e) {
    setProduct(initialProductState);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">Details</div>
            <div className="card-body">
              <TextInput
                type="text"
                name="name"
                value={product.name}
                label="Product Name"
                placeholder="Enter product name"
                handleChange={handleChange}
                required={true}
              />
              <TextInput
                type="text"
                name="brand"
                value={product.brand}
                label="Brand"
                placeholder="Enter product brand"
                handleChange={handleChange}
                required={true}
              />
              <div className="row">
                <div className="col-lg-6">
                  <SelectInput
                    label="Categories"
                    options={categories}
                    name="category"
                    value={product.category}
                    // onChange={handleCategoryChange}
                    handleChange={handleChange}
                    required={true}
                  />
                </div>

                <div className="col-lg-6">
                  <TextInput
                    type="number"
                    name="quantity"
                    value={product.quantity}
                    label="Quantity"
                    placeholder="Enter product quantity"
                    handleChange={handleChange}
                    required={true}
                  />
                </div>
              </div>
              {/* <div className="row">
                <div className="col-lg-6">
                  
                  <TextInput
                    type="number"
                    label="Size"
                    value={product.size_}
                    name="size_"
                    handleChange={handleChange}
                    placeholder="Enter product size"
                    required={true}
                  />
                </div>

                <div className="col-lg-6">
                  <TextInput
                    type="number"
                    label="Weight"
                    value={product.weight_}
                    name="weight_"
                    handleChange={handleChange}
                    placeholder="Enter product weight"
                    required={true}
                  />
                </div>
              </div> */}
              {/* <SelectInput
                label="Color"
                options={colors}
                name="color"
                value={product.color}
                // onChange={handleCategoryChange}
                handleChange={handleChange}
                required={true}
              /> */}
              <div className="mb-3">
                <label className="form-label">Product Description</label>
                <textarea
                  className="form-control"
                  rows="5"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required={false}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">Product Gallery</div>
            <div className="card-body">
              <ImgUpload imgUrl={product.imgUrl} handleChange={handleChange} />
              {/* <TextInput
                    type="text"
                    label="Image URL"
                    value={product.img_url}
                    name="img_url"
                    handleChange={handleChange}
                    placeholder="Enter product image URL"
                    required={true}
                /> */}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">Pricing</div>
            <div className="card-body">
              <InputGroup
                label="Price"
                prependText="VND"
                type="number"
                placeholder="Enter product price"
                name="price"
                value={product.price}
                handleChange={handleChange}
                required={true}
              />
              {/* <InputGroup
                label="Discount"
                prependText="%"
                type="number"
                placeholder="Enter discount percentage"
                name="discount"
                value={product.discount}
                handleChange={handleChange}
                required={false}
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="create-actions">
        <button type="submit" className="btn btn-success mt-4">
          {selectedProduct ? "Update" : "Create"}
        </button>
        <button
          type="reset"
          className="btn btn-secondary mt-4"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default FormInfo;
