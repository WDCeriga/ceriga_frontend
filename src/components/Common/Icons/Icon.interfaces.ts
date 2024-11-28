export interface IIcon {
  width: string;
  height: string;
}

export interface IIconProps extends IIcon {
  color: string;
}

export interface IMenuIcon extends IIconProps {
  type: "open" | "close";
}

export interface IArrow extends IIconProps {
  type: "left" | "right";
}

export interface IArrowVertical extends IIconProps {
  type: "top" | "bottom";
}

export interface IArrowHorizontal extends IIconProps {
  type: "left" | "right";
}

export interface IArrowFull {
  type: "left" | "right";
  size: string;
  color: string;
}

export interface ICloseIcon extends IIconProps { 
  type?: "no-border"
}