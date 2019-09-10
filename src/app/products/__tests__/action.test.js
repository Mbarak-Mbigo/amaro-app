import { actionTypes, addProduct } from "../action";

describe("Product Actions", () => {
  test("addProduct action", () => {
    expect(addProduct({ name: "product A" })).toEqual({
      type: actionTypes.ADD_PRODUCT,
      product: { name: "product A" }
    });
  });
});
