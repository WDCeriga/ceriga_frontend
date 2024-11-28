import { defaultApi } from "@api/api";
import routes from "@routes/index";

export const getListProductsApi = async () => {
  const { data } = await defaultApi.get(
    `${routes.server.products.base}${routes.server.products.getList}`
  );
  return data;
};

export const getProductInfoApi = async (id: string) => {
  const { data } = await defaultApi.get(`${routes.server.products.base}/${id}`);
  return data;
};

export const getColorsForProductApi = async (product: string) => {
  const { data } = await defaultApi.get(
    `${routes.server.getColors}?product=${product}`
  );
  return data;
};
