import { FC, ReactNode, useCallback, ButtonHTMLAttributes, memo } from "react";

import "./styles.scss";

interface TabButtonProps<T = any>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  tabValue: T;
  onButtonClick: (value: T) => void;
  children: ReactNode;
  active: boolean;
}

const TabButton: FC<TabButtonProps> = ({
  tabValue,
  onButtonClick,
  children,
  active,
  ...rest
}) => {
  const handleClick = useCallback(() => {
    onButtonClick(tabValue);
  }, [onButtonClick, tabValue]);

  const className = `tabs-button${active ? " tabs-button-active" : ""}`;

  return (
    <button className={className} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export default memo(TabButton);
