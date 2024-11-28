import { FC } from "react";

import { IArrow, IArrowVertical, IIconProps } from "./Icon.interfaces";

const DashboardIcon: FC<IIconProps> = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.89 1.44991L20.89 5.44991C21.2233 5.61548 21.5037 5.87073 21.6998 6.18695C21.8959 6.50317 21.9999 6.86782 22 7.23991V16.7699C21.9999 17.142 21.8959 17.5066 21.6998 17.8229C21.5037 18.1391 21.2233 18.3943 20.89 18.5599L12.89 22.5599C12.6122 22.6989 12.3058 22.7713 11.995 22.7713C11.6843 22.7713 11.3779 22.6989 11.1 22.5599L3.10005 18.5599C2.76718 18.3922 2.4878 18.1348 2.29344 17.8167C2.09907 17.4987 1.99745 17.1326 2.00005 16.7599V7.23991C2.00025 6.86782 2.10424 6.50317 2.30033 6.18695C2.49642 5.87073 2.77684 5.61548 3.11005 5.44991L11.11 1.44991C11.3866 1.31248 11.6912 1.24097 12 1.24097C12.3089 1.24097 12.6135 1.31248 12.89 1.44991V1.44991Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.32031 6.15991L12.0003 10.9999L21.6803 6.15991"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22.76V11"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StatisticsIcon: FC<IIconProps> = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.5901 3.5293H5.4136C4.37401 3.5293 3.53125 4.37205 3.53125 5.41165V18.5881C3.53125 19.6277 4.37401 20.4705 5.4136 20.4705H18.5901C19.6297 20.4705 20.4724 19.6277 20.4724 18.5881V5.41165C20.4724 4.37205 19.6297 3.5293 18.5901 3.5293Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.1204 7.29395H7.29688V15.7645H10.1204V7.29395Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.7063 7.29395H13.8828V11.9998H16.7063V7.29395Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CatalogIcon: FC<IIconProps> = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_240)">
      <path
        d="M17.9935 9.24251H20.5273C20.6664 9.24251 20.8028 9.20333 20.9211 9.12936C21.0395 9.0554 21.1351 8.94957 21.1974 8.82373L22.9209 5.33805C23.0065 5.16484 23.0233 4.96505 22.9679 4.77972C22.9124 4.59438 22.7888 4.43757 22.6225 4.34149L17.9935 1.66675M17.9935 1.66675V17.5758C17.9935 17.7768 17.9146 17.9695 17.7741 18.1115C17.6336 18.2536 17.443 18.3334 17.2443 18.3334H6.75567C6.55697 18.3334 6.36641 18.2536 6.22591 18.1115C6.08541 17.9695 6.00648 17.7768 6.00648 17.5758V1.66675M17.9935 1.66675H14.9968C14.9968 2.47043 14.681 3.2412 14.119 3.8095C13.557 4.37779 12.7948 4.69705 12 4.69705C11.2052 4.69705 10.443 4.37779 9.88097 3.8095C9.31897 3.2412 9.00324 2.47043 9.00324 1.66675H6.00648M6.00648 9.24251H3.47274C3.33361 9.24251 3.19722 9.20333 3.07887 9.12936C2.96051 9.0554 2.86487 8.94957 2.80264 8.82373L1.0791 5.33805C0.993452 5.16484 0.976652 4.96505 1.03215 4.77972C1.08764 4.59438 1.21122 4.43757 1.37749 4.34149L6.00648 1.66675"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_240">
        <rect width={width} height={height} fill={color} />
      </clipPath>
    </defs>
  </svg>
);

const MyDraftIcon: FC<IIconProps> = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 14.66V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9.34"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 2L22 6L12 16H8V12L18 2Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OrdersIcon: FC<IIconProps> = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 3H1V16H16V3Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8H20L23 11V16H16V8Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WalletIcon: FC<IIconProps> = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 10H23"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon: FC<IArrow> = ({ color, width, height, type }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={
        type === "left"
          ? "M5.13775 1.13783C5.3981 0.877477 5.3981 0.455367 5.13775 0.195018C4.8774 -0.0653315 4.45529 -0.0653315 4.19494 0.195018L0.194937 4.19502C-0.0654122 4.45537 -0.0654122 4.87748 0.194937 5.13783L4.19494 9.13783C4.45529 9.39818 4.8774 9.39818 5.13775 9.13783C5.3981 8.87748 5.3981 8.45537 5.13775 8.19502L1.60915 4.66642L5.13775 1.13783Z"
          : "M0.195262 8.19518C-0.0650874 8.45553 -0.0650874 8.87764 0.195262 9.13799C0.455612 9.39834 0.877722 9.39834 1.13807 9.13799L5.13807 5.13799C5.39842 4.87764 5.39842 4.45553 5.13807 4.19518L1.13807 0.195182C0.877722 -0.0651684 0.455612 -0.0651684 0.195262 0.195182C-0.0650874 0.455531 -0.0650874 0.877641 0.195262 1.13799L3.72386 4.66659L0.195262 8.19518Z"
      }
      fill={color}
    />
  </svg>
);

const ArrowVerticalIcon: FC<IArrowVertical> = ({
  type,
  color,
  width,
  height,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={type === "bottom" ? "M1 1L7 7L13 1" : "M13.001 7L7.00098 1L1.00098 7"}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SwitchIcon: FC<IIconProps> = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10L21 7M21 7L18 4M21 7H7M6 14L3 17M3 17L6 20M3 17H17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  DashboardIcon,
  StatisticsIcon,
  CatalogIcon,
  MyDraftIcon,
  OrdersIcon,
  WalletIcon,
  ArrowIcon,
  ArrowVerticalIcon,
  SwitchIcon,
};
