type ReturnType = {
  state: "success" | "error";
  message: string;
};

const copyToClipboard = async (value: string): Promise<ReturnType> => {
  try {
    if (!navigator?.clipboard) {
      return {
        state: "error",
        message: "Clipboard API not supported",
      };
    }

    await navigator.clipboard.writeText(value);
    return {
      state: "success",
      message: "Copied to clipboard",
    };
  } catch (error: any) {
    return {
      state: "error",
      message: error?.message || "Failed to copy",
    };
  }
};

export default copyToClipboard;