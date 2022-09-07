import reactDom from "react-dom";
import { ReactNode } from "react";

const LoadingPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("loading");
  if (!el) return null;
  return reactDom.createPortal(children, el);
};

export default LoadingPortal;
