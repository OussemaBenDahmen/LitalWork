import axios from "axios";

export function DeleteProductFromApi(product) {
  return (dispatch) => {
    axios.post(
      `http://localhost:5000/app/history/post`,
      {
        action: "Suppression",
        Product_name: product.name,
      },
      { withCredentials: true }
    );
    axios
      .delete(`http://localhost:5000/app/Products/delete/${product.id}`, {
        withCredentials: true,
      })
      .then(() => {
        window.location.reload();
      });
  };
}
