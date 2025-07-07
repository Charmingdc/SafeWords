type ReturnType = {
  state: "success" | "error";
  message: string;
};

const copyToClipboard = async (value: string): Promise<ReturnType> => {
  try {
    if (!navigator?.clipboard) {
      return {
        state: "error",
        message: "Clipboard API not supported"
      };
    }

    await navigator.clipboard.writeText(value);
    return {
      state: "success",
      message: "Copied to clipboard"
    };
  } catch (error: unknown) {
    return {
      state: "error",
      message: error instanceof Error ? error.message : "Failed to copy"
    };
  }
};

export default copyToClipboard;
