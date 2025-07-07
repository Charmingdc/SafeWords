const decrypt = async (
  encryptedBase64: string,
  password: string
): Promise<string> => {
  try {
    if (typeof password !== "string" || password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }

    const decoder = new TextDecoder();
    const encoder = new TextEncoder();

    const encryptedBytes = Uint8Array.from(atob(encryptedBase64), c =>
      c.charCodeAt(0)
    );
    const salt = encryptedBytes.slice(0, 16);
    const iv = encryptedBytes.slice(16, 28);
    const ciphertext = encryptedBytes.slice(28);

    const encodedPsw = encoder.encode(password);

    const baseKey = await crypto.subtle.importKey(
      "raw",
      encodedPsw,
      "PBKDF2",
      false,
      ["deriveKey"]
    );

    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: 100_000,
        hash: "SHA-256"
      },
      baseKey,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );

    let decryptedBuffer: ArrayBuffer;
    try {
      decryptedBuffer = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        derivedKey,
        ciphertext
      );
    } catch (decryptionError: unknown) {
      throw new Error(
        decryptionError instanceof Error
          ? "Failed to decrypt. The password may be incorrect or data is corrupted."
          : "An unknown error as occurred"
      );
    }

    return decoder.decode(decryptedBuffer);
  } catch (err: unknown) {
    console.error("Decryption error:", err);
    throw new Error(
      err instanceof Error
        ? err.message
        : "An unknown error occurred during decryption"
    );
  }
};

export default decrypt;
