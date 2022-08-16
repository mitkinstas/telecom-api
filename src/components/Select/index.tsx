import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";

import { FC } from "react";

const Select: FC<AntSelectProps> = (props) => {
  return <AntSelect {...props}>{props.children}</AntSelect>;
};

export const { Option } = AntSelect;

export default Select;
