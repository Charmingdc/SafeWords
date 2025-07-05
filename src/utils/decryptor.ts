const createDecryptor = () => {
  return async (encryptedBase64: string, password: string): Promise<string> => {
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();

    const encryptedBytes = Uint8Array.from(atob(encryptedBase64), c =>
      c.charCodeAt(0)
    );

    // Slice salt (16), iv (12), and ciphertext
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

    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      derivedKey,
      ciphertext
    );

    return decoder.decode(decryptedBuffer);
  };
};

export default createDecryptor;
