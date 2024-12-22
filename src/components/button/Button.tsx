import React from "react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

type IProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "secondary";
};
const ButtonItem: React.FC<IProps> = ({
  children,
  className,
  variant = "primary",
}) => {
  return (
    <Button
      className={clsx(
        className,
        variant === "primary" &&
          "bg-greenish hover:opacity-80 hover:bg-greenish transition-all duration-500 ease-in-out text-white",
        variant === "outline" &&
          "border border-green-500 text-green-500 bg-transparent",
        variant === "secondary" && "bg-gray-500 text-white"
      )}
    >
      {children}
    </Button>
  );
};

export default ButtonItem;
