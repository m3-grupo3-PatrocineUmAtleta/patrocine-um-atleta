import React from "react";
import { ContainerRenderStyle } from "./style";

export interface iRenderContainerProps {
  children?: React.ReactNode;
  size: string;
}

export const RenderContainerSection = ({
  children,
  size,
}: iRenderContainerProps) => {
  return <ContainerRenderStyle size={size}>{children}</ContainerRenderStyle>;
};
