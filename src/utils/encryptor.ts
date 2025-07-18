const encrypt = async (data: string, password: string): Promise<string> => {
  try {
    if (typeof password !== "string" || password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }

    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);
    const encodedPsw = encoder.encode(password);

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const salt = crypto.getRandomValues(new Uint8Array(16));

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
      ["encrypt"]
    );

    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      derivedKey,
      encodedData
    );

    const encryptedBytes = new Uint8Array([
      ...salt,
      ...iv,
      ...new Uint8Array(encrypted)
    ]);

    return btoa(String.fromCharCode(...encryptedBytes));
  } catch (err: unknown) {
    console.error("Encryption failed:", err);
    throw new Error(
      err instanceof Error ? err.message : "An unknown error has occurred"
    );
  }
};

export default encrypt;
