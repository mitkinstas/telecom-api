import { ReactNode } from "react";
import { ApiSettings } from "./components/ApiRequest/types";

import Button from "./components/Button";
import Input from "./components/Input";
import Select, { Option } from "./components/Select";

export const API_SETTINGS: Record<string, ApiSettings> = {
  number_verification: {
    requestType: "XPOST",
    apiRoot: "https://api.boomware.com/v1",
    apiPath: "/verify",
    referenceUrl: "https://boomware.com/docs/en/#Verification",
    curlParams: [
      {
        key: "u",
        value: "---------------------------",
      },
      {
        key: "d",
        label: "number",
        value: "+79956617879",
      },
      {
        key: "d",
        label: "method",
        value: "sms",
      },
      {
        key: "d",
        label: "language",
        value: "en",
      },
    ],
  },
  number_insight: {
    requestType: "XPOST",
    apiRoot: "https://api.boomware.com/v1",
    apiPath: "/insight/hlr",
    referenceUrl: "https://boomware.com/docs/en/#Insight",
    curlParams: [
      {
        key: "u",
        value: "---------------------------",
      },
      {
        key: "d",
        label: "number",
        value: "+79956617879",
      },
    ],
  },
  send_an_sms: {
    requestType: "XPOST",
    apiRoot: "https://api.boomware.com/v1",
    apiPath: "/sms",
    referenceUrl: "https://boomware.com/docs/en/#SMS",
    curlParams: [
      {
        key: "u",
        value: "---------------------------",
      },
      {
        key: "d",
        label: "number",
        value: "+79956617879",
      },
      {
        key: "d",
        label: "text",
        value: '""',
      },
    ],
  },
};

export const API_VIEW: Record<string, ReactNode> = {
  number_verification: (
    <div className="api-content">
      <Input
        className="numberInput"
        placeholder="Phone number (E.164)"
        maxLength={18}
        type="text"
        style={{ marginRight: "1rem" }}
      />
      <Select defaultValue="sms" style={{ width: 120, marginRight: "1rem" }}>
        <Option value="sms">SMS</Option>
        <Option value="call">Call</Option>
        <Option value="voice">Voice</Option>
      </Select>

      <Button type="primary">Request</Button>
    </div>
  ),
  number_insight: (
    <div className="api-content">
      <Input
        className="numberInput"
        placeholder="Phone number (E.164)"
        maxLength={18}
        type="text"
        style={{ marginRight: "1rem" }}
      />

      <Button type="primary">Request</Button>
    </div>
  ),
  send_an_sms: (
    <div className="api-content">
      <Input
        className="numberInput"
        placeholder="Phone number (E.164)"
        maxLength={18}
        type="text"
        style={{ marginRight: "1rem" }}
      />

      <Input
        className="textInput"
        placeholder="Text Message"
        maxLength={32}
        type="text"
        style={{ marginRight: "1rem" }}
      />

      <Button type="primary">Request</Button>
    </div>
  ),
};
