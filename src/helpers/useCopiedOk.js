import { useState } from "react";

import { CopiedMessage } from "../ComponentHelpers/CopiedMsj";

export function useCopiedOk() {
  const [copied, setCopied] = useState(false);

  const handleCopied = () => {
    console.log("handleCopied");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return { copied, handleCopied, CopiedMessage };
}
