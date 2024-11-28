import { INotificationCard } from "@interfaces/Notification.interface";

const getRandomDateWithinMonths = (baseDate: Date, months: number): Date => {
  const start = new Date(baseDate);
  
  start.setMonth(start.getMonth() - months);

  const end = new Date(baseDate);

  end.setMonth(end.getMonth() + months);

  const startTime = start.getTime();
  const endTime = end.getTime();
  
  const randomTime = Math.floor(Math.random() * (endTime - startTime + 1)) + startTime;
  
  return new Date(randomTime);
};

const now = new Date(); 

export const notificationList: INotificationCard[] = [
  { 
    id: "13424",
    title: "Order status changed",
    product: "hoodie",
    orderId: "53452", 
    date: now,
    text: "Superadministrator changed the order status to “Submitted”"
  },
  { 
    id: "143524",
    title: "Order status changed",
    product: "crewneck",
    orderId: "53234232", 
    date: getRandomDateWithinMonths(now, 3),
    text: "Superadministrator changed the order status to “Submitted”"
  },
  { 
    id: "33345",
    title: "Order status changed",
    product: "sweatpants",
    orderId: "54353452", 
    date: getRandomDateWithinMonths(now, 24), 
    text: "Superadministrator changed the order status to “Submitted”"
  },
];