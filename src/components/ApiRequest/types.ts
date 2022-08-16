export interface CurlParams {
  key: string;
  label?: string;
  value?: string;
}

export interface ApiSettings {
  requestType?: string;
  apiRoot?: string;
  apiPath?: string;
  curlParams?: CurlParams[];
  referenceUrl?: string;
}

export interface ApiRequestProps {
  apiSettings?: ApiSettings;
}
