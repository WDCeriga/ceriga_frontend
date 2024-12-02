import {
  IAdminOrder,
  manufacturerType,
} from "../../interfaces/bll/adminOrders.interface";
import { ISettingForm } from "@interfaces/setting/setting.interface";
import { IChangePassportData } from "@interfaces/setting/changePassword.interface";
import { IOrderState } from "@interfaces/bll/order.interface";
import { orderStatusType } from "@interfaces/orders/orders.interface";
import { IInvoice } from "@interfaces/Invoice.interface";
import { IShippingValues } from "@interfaces/bll/editShipping.interface";
import { IDelivery } from "@interfaces/Delivery.interface";
import { IProductChangePrice } from "@interfaces/ChangePriceTable";
import routes from "@routes/index";

import { protectedApi } from "../api";

const getInfoApi = async () => {
  const { data } = await protectedApi.get(routes.server.info);
  return data;
};

const getNotificationApi = async () => {
  const { data } = await protectedApi.get(routes.server.getNotifications);
  return data;
};

const createTestNotificationApi = async () => {
  await protectedApi.post(routes.server.sendTestNotification);
};

const deleteNotificationApi = async (id: string) => {
  const { data }: { data: string } = await protectedApi.delete(
    `${routes.server.deleteNotification}?notificationId=${id}`
  );
  return data;
};

const getUsersListApi = async () => {
  const { data } = await protectedApi.get(routes.server.getUsers);
  return data;
};

const updateSettingInfoApi = async (newInfo: ISettingForm) => {
  const { data } = await protectedApi.put(routes.server.settingUpdate, newInfo);
  return data;
};

const changePasswordApi = async ({
  password,
  newPassword,
}: IChangePassportData) => {
  try {
    const response = await protectedApi.put(routes.server.changePassword, {
      password,
      newPassword,
    });
    return {
      status: "ok",
      message: response.data.message,
    };
  } catch (e) {
    return {
      status: "rejected",
      message: "Password incorrect",
    };
  }
};

const sendAminInviteApi = async (email: string) => {
  const res = await protectedApi.post(`${routes.server.sendAdminInvite}`, {
    email,
  });
  return res;
};

//Drafts

const createNewDraftApi = async (newDraft: IOrderState) => {
  const { data } = await protectedApi.post(routes.server.drafts.create, {
    draft: newDraft,
  });
  return data;
};

const updateDraftApi = async (updatedDraft: IOrderState) => {
  const { data } = await protectedApi.post(routes.server.drafts.update, {
    draft: updatedDraft,
  });
  return data.subtotal;
};

const getDraftsListApi = async () => {
  const { data } = await protectedApi.get(routes.server.drafts.list);
  return data;
};

const duplicateDraftApi = async (draftId: string) => {
  const { data } = await protectedApi.post(
    `${routes.server.drafts.duplicate}?draftId=${draftId}`
  );
  return data;
};

const deleteDraftApi = async (draftId: string) => {
  const { data } = await protectedApi.delete(
    `${routes.server.drafts.delete}?draftId=${draftId}`
  );
  return data;
};

const continueOrderApi = async (draftId: string) => {
  const { data } = await protectedApi.get(
    `${routes.server.drafts.continueOrder}?draftId=${draftId}`
  );
  return data;
};

//Upload Files

const uploadDesignApi = async (formData: FormData, draftId: string) => {
  // Ensure the file field is named 'file'
  const fileField = formData.get('file');
  if (!fileField) {
    const file = formData.get('image'); // or whatever field name you're using
    if (file) {
      formData.delete('image'); // or the original field name
      formData.append('file', file);
    }
  }

  const { data } = await protectedApi.post(
    `${routes.server.drafts.uploadDesign}?draftId=${draftId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data.fileUrl; // Changed from data.file.filename to data.fileUrl
};

const uploadLabelApi = async (formData: FormData, draftId: string) => {
  const fileField = formData.get('file');
  if (!fileField) {
    const file = formData.get('image');
    if (file) {
      formData.delete('image');
      formData.append('file', file);
    }
  }

  const { data } = await protectedApi.post(
    `${routes.server.drafts.uploadLabel}?draftId=${draftId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data.fileUrl;
};

const uploadNeckApi = async (formData: FormData, draftId: string) => {
  const fileField = formData.get('file');
  if (!fileField) {
    const file = formData.get('image');
    if (file) {
      formData.delete('image');
      formData.append('file', file);
    }
  }

  const { data } = await protectedApi.post(
    `${routes.server.drafts.uploadNeck}?draftId=${draftId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data.fileUrl;
};

const uploadPackageApi = async (formData: FormData, draftId: string) => {
  const fileField = formData.get('file');
  if (!fileField) {
    const file = formData.get('image');
    if (file) {
      formData.delete('image');
      formData.append('file', file);
    }
  }

  const { data } = await protectedApi.post(
    `${routes.server.drafts.uploadPackage}?draftId=${draftId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data.fileUrl;
};



const getImagesUploadApi = async (draftId: string, type: string) => {
  const { data } = await protectedApi.get(
    `${routes.server.drafts.images}?draftId=${draftId}&type=${type}`
  );
  return data;
};
//

//Order

const createOrderApi = async (draftId: string) => {
  const res = await protectedApi.post(routes.server.orders.create, {
    draftId,
  });
  return res;
};

const getOrdersListApi = async () => {
  const { data } = await protectedApi.get(routes.server.orders.list);
  return data;
};

const getOrderListInAdminApi = async (manufacturer: string) => {
  const { data } = await protectedApi.get(
    `${routes.server.orders.listForAdmin}?manufacturer=${manufacturer}`
  );
  return data;
};

const duplicateOrderApi = async (orderId: number) => {
  const { data } = await protectedApi.get(
    `${routes.server.orders.duplicate}?orderId=${orderId}`
  );
  return data;
};

const deleteOrderApi = async (orderId: number) => {
  const { data } = await protectedApi.delete(
    `${routes.server.orders.delete}?orderId=${orderId}`
  );
  return data;
};

const editOrderApi = async (orderId: number) => {
  const { data } = await protectedApi.get(
    `${routes.server.orders.edit}?orderId=${orderId}`
  );
  return data;
};

const getOrderItemApi = async (orderId: string) => {
  const { data } = await protectedApi.get(
    `${routes.server.orders.item}?orderId=${orderId}`
  );
  return data;
};

const paymentGenerateApi = async (orderId: number) => {
  const { data } = await protectedApi.post(
    `${routes.server.orders.payment}?orderId=${orderId}`
  );
  return data;
};

//Orders - Admin

const changeOrderStatusApi = async (
  orderId: number,
  status: orderStatusType
) => {
  const { data } = await protectedApi.put(
    `${routes.server.orders.changeOrderStatus}?orderId=${orderId}&newStatus=${status}`
  );
  return data;
};

//Orders - only for admin and super admin
const getAllOrdersApi = async () => {
  const { data }: { data: IAdminOrder[] } = await protectedApi.get(
    routes.server.orders.allList
  );
  return data;
};

const changeManufactoryApi = async (
  orderId: string,
  newManufacturer: manufacturerType
) => {
  const { data } = await protectedApi.put(
    `${routes.server.orders.changeManufacturer}?orderId=${orderId}&newManufacturer=${newManufacturer}`
  );
  return data;
};

const changeNameInOrderApi = async (orderId: string, newName: string) => {
  const res = await protectedApi.put(
    `${routes.server.orders.changeName}?orderId=${orderId}&newName=${newName}`
  );
  return res;
};

const deleteOrderAdminApi = async (orderId: string) => {
  const { data } = await protectedApi.delete(
    `${routes.server.orders.deleteByAdmin}?orderId=${orderId}`
  );
  return data;
};

const setInvoiceForOrderApi = async (
  orderId: string,
  invoiceData: IInvoice
) => {
  try {
    const { data } = await protectedApi.post(
      routes.server.orders.invoiceOrder,
      {
        orderId,
        ...invoiceData,
      }
    );
    return data;
  } catch (error) {
    console.error("Failed to set invoice for order", error);
    throw error;
  }
};

const getInvoiceDataApi = async (orderId: string) => {
  try {
    const { data } = await protectedApi.get(
      `${routes.server.orders.invoiceOrder}?orderId=${orderId}`
    );
    return data;
  } catch (error) {
    console.error("Failed to get invoice data for order", error);
    throw error;
  }
};

const confirmInvoiceApi = async (orderId: string) => {
  const { data } = await protectedApi.put(
    `${routes.server.orders.invoiceConfirm}?orderId=${orderId}`
  );
  return data;
};
const getTotalCountInOrderApi = async (orderId: string) => {
  const { data } = await protectedApi.get(
    `${routes.server.orders.totalCount}?orderId=${orderId}`
  );
  return data;
};
const changeManufacturerInAdminApi = async (
  id: string,
  manufacturer: string
) => {
  const { data } = await protectedApi.put(
    `${routes.server.changeManufacturer}?id=${id}&manufacturer=${manufacturer}`
  );
  return data;
};

const getShippingInOrderApi = async (orderId: string) => {
  const { data } = await protectedApi.get(
    `${routes.server.orders.getShipping}?orderId=${orderId}`
  );
  return data;
};

const editShippingInOrderApi = async (
  orderId: string,
  fields: IShippingValues
) => {
  const { tracking, trackingUrl, carriers } = fields;
  const queryReq = `orderId=${orderId}&tracking=${tracking}&trackingUrl=${trackingUrl}&carriers=${carriers}`;
  const { data } = await protectedApi.put(
    `${routes.server.orders.editShipping}?${queryReq}`,
    fields
  );
  return data;
};

const getAnalyticsForUsersApi = async () => {
  const { data } = await protectedApi.get(routes.server.analytics.forUsers);
  return data;
};
const getAnalyticsForOrdersApi = async () => {
  const { data } = await protectedApi.get(routes.server.analytics.forOrders);
  return data;
};
const getAnalyticsForRevenueApi = async () => {
  const { data } = await protectedApi.get(routes.server.analytics.forRevenue);
  return data;
};

const getUsersEmailApi = async () => {
  const { data } = await protectedApi.get(routes.server.usersEmail);
  return data;
};
const sendNotificationApi = async ({
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  try {
    const { data } = await protectedApi.post(routes.server.sendNotification, {
      email,
      message,
    });
    return data;
  } catch (error) {
    console.error("Error sending notification:", error);
    throw error;
  }
};
const uploadProfileApi = async (formData: FormData) => {
  const { data } = await protectedApi.post(
    routes.server.uploadPhoto,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

const inviteSubAdminByEmail = async (email: string) => {
  const res = await protectedApi.post(routes.server.inviteSubAdmin, { email });
  return res;
};

const saveDeliveryInfo = async (delivery: IDelivery) => {
  const { data } = await protectedApi.post(routes.server.drafts.saveDelivery, {
    delivery,
  });
  return data;
};

const loadDeliveryApi = async () => {
  const { data } = await protectedApi.get(routes.server.drafts.loadDelivery);
  return data;
};

const getProductsForPriceApi = async () => {
  const { data } = await protectedApi.get(routes.server.getProductsForPrice);
  return data;
};

const saveNewPriceInProductApi = async (product: IProductChangePrice) => {
  const { data } = await protectedApi.post(
    routes.server.saveNewPriceInProduct,
    product
  );
  return data;
};

const getDeliveryInfoApi = async (id: string) => {
  const { data } = await protectedApi.get(`${routes.server.deliveryInfo}?orderId=${id}`);
  return data
}

export {
  getInfoApi,
  updateSettingInfoApi,
  changePasswordApi,
  getNotificationApi,
  createTestNotificationApi,
  deleteNotificationApi,
  getUsersListApi,
  sendAminInviteApi,
  createNewDraftApi,
  updateDraftApi,
  getDraftsListApi,
  duplicateDraftApi,
  deleteDraftApi,
  continueOrderApi,
  uploadDesignApi,
  uploadLabelApi,
  uploadNeckApi,
  getImagesUploadApi,
  createOrderApi,
  getOrdersListApi,
  duplicateOrderApi,
  deleteOrderApi,
  editOrderApi,
  getOrderItemApi,
  getAllOrdersApi,
  changeManufactoryApi,
  deleteOrderAdminApi,
  changeOrderStatusApi,
  paymentGenerateApi,
  setInvoiceForOrderApi,
  getInvoiceDataApi,
  confirmInvoiceApi,
  getTotalCountInOrderApi,
  changeManufacturerInAdminApi,
  getOrderListInAdminApi,
  getShippingInOrderApi,
  editShippingInOrderApi,
  getAnalyticsForUsersApi,
  getAnalyticsForOrdersApi,
  getAnalyticsForRevenueApi,
  getUsersEmailApi,
  sendNotificationApi,
  uploadProfileApi,
  inviteSubAdminByEmail,
  uploadPackageApi,
  saveDeliveryInfo,
  loadDeliveryApi,
  changeNameInOrderApi,
  getProductsForPriceApi,
  saveNewPriceInProductApi,
  getDeliveryInfoApi,
};
