import { Input as AntInput, InputProps as AntInputProps } from "antd";

import { FC } from "react";

const Input: FC<AntInputProps> = (props) => {
  return <AntInput {...props}>{props.children}</AntInput>;
};

export default Input;
