import Button from "../Button";
import { ButtonProps as AntButtonProps, notification } from "antd";
import { FC, useCallback } from "react";

interface CopyToClipboardButtonProps extends AntButtonProps {
  textToCopy: string;
}

const CopyToClipboardButton: FC<CopyToClipboardButtonProps> = (props) => {
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = useCallback(() => {
    copyTextToClipboard(props.textToCopy)
      .then(() => {
        notification.open({
          message: "Copied",
          duration: 3,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.textToCopy]);

  return (
    <Button {...props} onClick={handleCopyClick}>
      {props.children}
    </Button>
  );
};

export default CopyToClipboardButton;
