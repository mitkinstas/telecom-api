import { useState, useCallback } from "react";

import "./App.css";
import "antd/dist/antd.css";

import Tabs from "./components/Tabs";
import { Tab } from "./components/Tabs/types";
import ApiRequest from "./components/ApiRequest";
import { API_SETTINGS, API_VIEW } from "./mocks";

const DEFAULT_TABS: Tab<string>[] = [
  { value: "number_verification", label: "Number Verification" },
  { value: "number_insight", label: "Number Insight" },
  { value: "send_an_sms", label: "Send an SMS" },
];

function App() {
  const [currentTab, setCurrentTab] = useState(DEFAULT_TABS[0].value);

  const handleChangeTab = useCallback(
    (value: typeof currentTab) => setCurrentTab(value),
    []
  );

  return (
    <div className="App">
      <Tabs
        tabs={DEFAULT_TABS}
        tabValue={currentTab}
        onChange={handleChangeTab}
      />

      {API_VIEW?.[currentTab]}

      <ApiRequest apiSettings={API_SETTINGS?.[currentTab]} />
    </div>
  );
}

export default App;
