import axios from "axios";

export function AddProductToApi(product, image) {
  return (dispatch) => {
    axios.post(
      `http://localhost:5000/app/history/post`,
      {
        action: "Ajout",
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
      .post("http://localhost:5000/app/Products/add", product, {
        withCredentials: true,
      })
      .then((res) => {
        window.location.reload();
      });
  };
}
