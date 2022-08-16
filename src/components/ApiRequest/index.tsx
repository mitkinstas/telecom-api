import { FC, useRef, useEffect, useState } from "react";

import { ApiRequestProps } from "./types";

import CopyToClipboardButton from "../CopyToClipboardButton";

import "./styles.scss";

const DEFAULT_CURL_SETTINGS = {
  requestType: "XPOST",
  apiRoot: "https://api.boomware.com/v1",
  apiPath: "/verify",
  curlParams: [],
  referenceUrl: "",
};

const ApiRequest: FC<ApiRequestProps> = ({
  apiSettings = DEFAULT_CURL_SETTINGS,
}) => {
  const [curlRequestText, setCurlRequestText] = useState("");

  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const curlRequest = preRef.current?.textContent?.replaceAll(/\\/g, "\\\n");
    setCurlRequestText(curlRequest || "");
  }, []);

  return (
    <div className="api-request">
      <pre ref={preRef}>
        <i>curl -{apiSettings.requestType}</i> {apiSettings.apiRoot}
        {apiSettings.apiPath}
        <i> \</i>
        <br />
        {apiSettings.curlParams?.map((curlParam, index) => {
          const isNotLast = apiSettings.curlParams
            ? index !== apiSettings.curlParams?.length - 1
            : null;

          return (
            <>
              {"  "}
              <i>-{curlParam.key}</i> {curlParam.label}
              {curlParam.value ? (
                <>
                  {curlParam.label ? (
                    <>
                      =<b>{curlParam.value}</b>
                    </>
                  ) : (
                    <b>{curlParam.value}</b>
                  )}
                </>
              ) : (
                ""
              )}
              {isNotLast && (
                <>
                  <i> \</i>
                  <br />
                </>
              )}
            </>
          );
        })}
      </pre>

      <div className="api-request__buttons">
        <CopyToClipboardButton
          textToCopy={curlRequestText}
          className="api-request__button"
        >
          Copy
        </CopyToClipboardButton>
        <a
          className="api-request__button"
          target="_blank"
          href={apiSettings.referenceUrl}
          rel="noreferrer"
        >
          Reference
        </a>
      </div>
    </div>
  );
};

export default ApiRequest;
