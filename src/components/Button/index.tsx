import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import { FC } from "react";

const Button: FC<AntButtonProps> = (props) => {
  return <AntButton {...props}>{props.children}</AntButton>;
};

export default Button;
