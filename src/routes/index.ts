const routes = {
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:5173",

  //API ROUTES
  server: {
    base: "https://ceriga-backend-test.vercel.app",
    //base: "https://sudio-ceriga-backend.onrender.com",
    //base: "http://localhost:4000",
    auth: "/auth",
    refresh: "/auth/refresh",

    settingUpdate: "/user/edit",
    changePassword: "/user/change-password",

    uploadPhoto: "/user/upload-profile",
    authGoogle: "/auth/google",

    info: "/auth/info",
    sendNotification: "/notification/send",
    getNotifications: "/notification/list",
    sendTestNotification: "/notification/create-item-test",
    deleteNotification: "/notification/delete-item",

    sendAdminInvite: "/super-admin/invite",

    drafts: {
      list: "/drafts/list",
      create: "/drafts/create",
      update: "/drafts/update",
      duplicate: "/drafts/duplicate",
      delete: "/drafts/delete",
      continueOrder: "/drafts/continue-order",
      uploadDesign: "/drafts/upload-design",
      uploadLabel: "/drafts/upload-label",
      uploadNeck: "/drafts/upload-neck",
      uploadPackage: "/drafts/upload-package",
      images: "/drafts/images",
      publicImages: "/public/uploads",
      saveDelivery: "/user/save-delivery",
      loadDelivery: "/user/get-delivery",
    },
    orders: {
      create: "/orders/create",
      list: "/orders/list",
      listForAdmin: "orders/list-for-admin",
      duplicate: "/orders/duplicate",
      delete: "/orders/delete",
      edit: "/orders/edit",
      item: "/orders/item",
      payment: "/orders/create-checkout-session",

      //Only for admin and superAdmin
      allList: "/orders/all-list",
      changeManufacturer: "/orders/change-manufacturer",
      changeName: "/orders/change-name",
      deleteByAdmin: "/orders/delete-by-admin",
      invoiceOrder: "/orders/invoice-order",
      totalCount: "/orders/total-count",

      //Shipping
      getShipping: "/orders/get-shipping",
      editShipping: "/orders/edit-shipping",
      //Only for admin
      changeOrderStatus: "/orders/change-status",
      //Only for super admin
      invoiceConfirm: "/orders/invoice-confirm",
    },
    getColors: "/colors/by-product",
    //Super Admin
    getUsers: "/super-admin/users",
    changeManufacturer: "/super-admin/change-manufacturer",
    getProductsForPrice: "/super-admin/products-for-price",
    saveNewPriceInProduct: "/super-admin/save-new-price",

    analytics: {
      forUsers: "/super-admin/analytics-for-user",
      forOrders: "/super-admin/analytics-for-orders",
      forRevenue: "/super-admin/analytics-for-amounts",
    },
    usersEmail: "/super-admin/users-emails",
    //Admin
    deliveryInfo: "/admin/delivery-info",
    products: {
      base: "/products",
      getList: "/list",
      defaultImg: "/public/products/default.svg",
    },
    inviteSubAdmin: "/admin/invite-by-email",
  },

  //PAGES ROUTES
  index: "/",
  catalog: "/catalog",
  drafts: "/drafts",
  order: "/order",
  orders: "/orders",
  orderPreview: "/order-preview/:id",
  setting:  "/change-password",//"/setting",
  changePassword: "/change-password",
  notification: "/notification",
  statistics: "/statistics",
  images: "/order/images/:id/:type",

  //PAGES ADMIN
  adminDashboard: "/admin-dashboard",
  adminOrders: "/admin-orders",
  deliveryInfo: "/delivery-info",
  adminInvoice: {
    route: "/invoice/:id",
    url: "/invoice",
  },
  editShipping: {
    router: "/edit-shipping/:id",
    url: "/edit-shipping",
  },
  pay: {
    baseUrl: "/payment",
    success: { router: "success/:id", link: "/success" },
    cancel: { router: "cancel/:id", link: "/cancel" },
  },
  //AUTH PAGE
  auth: "/auth",
  signIn: "sign-in",
  signUp: "sign-up",
  resetPassword: "reset-password",
  entryCode: "entry-code/:userId",
  confirmSocial: "social/:id",

  dashboard: "/dashboard",
  changePrice: "/change-price",
  
};

export default routes;
