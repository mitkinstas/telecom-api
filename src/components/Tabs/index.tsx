import { FC, memo, useCallback } from "react";

import TabButton from "./components/TabButton";
import "./styles.scss";

import { TabsProps } from "./types";

const Tabs: FC<TabsProps> = ({ tabs, tabValue, onChange }) => {
  const handleButtonClick = useCallback(
    (value: typeof tabValue) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <div className="tabs">
      {tabs?.map((tab) => (
        <TabButton
          key={tab.value}
          tabValue={tab.value}
          onButtonClick={handleButtonClick}
          active={tabValue === tab.value}
        >
          {tab.label}
        </TabButton>
      ))}
    </div>
  );
};

export default memo(Tabs);
