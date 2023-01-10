import React from "react";
import { ContainerRenderStyle } from "./style";

interface iRenderContainerProps {
  children?: React.ReactNode;
}

export const RenderContainerSection = ({ children }: iRenderContainerProps) => {
  return <ContainerRenderStyle>{children}</ContainerRenderStyle>;
};
