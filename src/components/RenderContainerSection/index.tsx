import React from "react";
import { StyledContainerRender } from "./style";

export interface iRenderContainerProps {
  children?: React.ReactNode;
  size: string;
}

export const RenderContainerSection = ({
  children,
  size,
}: iRenderContainerProps) => {
  return <StyledContainerRender size={size}>{children}</StyledContainerRender>;
};
