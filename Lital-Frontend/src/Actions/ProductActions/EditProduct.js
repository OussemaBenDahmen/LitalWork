import axios from "axios";

export function EditProductinApi(product, image) {
  return (dispatch) => {
    axios.post(
      `http://localhost:5000/app/history/post`,
      {
        action: "Modification",
        Product_name: product.name,
      },
      { withCredentials: true }
    );
    axios
      .post("http://localhost:5000/app/upload", image, {
        withCredentials: true,
      })
      .then(() => console.log("done"));
    axios
      .put(`http://localhost:5000/app/Products/edit/${product.id}`, product, {
        withCredentials: true,
      })
      .then(() => window.location.reload());
  };
}
