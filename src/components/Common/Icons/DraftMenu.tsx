import { FC } from "react";
import { IIconProps } from "./Icon.interfaces";

const EditIcon: FC<IIconProps> = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6665 12.2166V16.6666C16.6665 17.1086 16.4909 17.5325 16.1783 17.8451C15.8658 18.1577 15.4419 18.3333 14.9998 18.3333H3.33317C2.89114 18.3333 2.46722 18.1577 2.15466 17.8451C1.8421 17.5325 1.6665 17.1086 1.6665 16.6666V4.99992C1.6665 4.55789 1.8421 4.13397 2.15466 3.82141C2.46722 3.50885 2.89114 3.33325 3.33317 3.33325H7.78317"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9998 1.66675L18.3332 5.00008L9.99984 13.3334H6.6665V10.0001L14.9998 1.66675Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LayersIcon: FC<IIconProps> = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99984 1.66675L1.6665 5.83341L9.99984 10.0001L18.3332 5.83341L9.99984 1.66675Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.6665 14.1667L9.99984 18.3334L18.3332 14.1667"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.6665 10L9.99984 14.1667L18.3332 10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrashIcon: FC<IIconProps> = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 5H4.16667H17.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.6665 5.00008V3.33341C6.6665 2.89139 6.8421 2.46746 7.15466 2.1549C7.46722 1.84234 7.89114 1.66675 8.33317 1.66675H11.6665C12.1085 1.66675 12.5325 1.84234 12.845 2.1549C13.1576 2.46746 13.3332 2.89139 13.3332 3.33341V5.00008M15.8332 5.00008V16.6667C15.8332 17.1088 15.6576 17.5327 15.345 17.8453C15.0325 18.1578 14.6085 18.3334 14.1665 18.3334H5.83317C5.39114 18.3334 4.96722 18.1578 4.65466 17.8453C4.3421 17.5327 4.1665 17.1088 4.1665 16.6667V5.00008H15.8332Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.3335 9.16675V14.1667"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.6665 9.16675V14.1667"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { EditIcon, LayersIcon, TrashIcon };
