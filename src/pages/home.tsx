import { useState } from "react";
import { toast } from "sonner";

import createEncryptor from "@/utils/encryptor";
import createDecryptor from "@/utils/decryptor";

import { ShieldCheck, Key } from "lucide-react";
import Button from "@/components/ui/Button";
import TopNavbar from "@/components/TopNavbar";

import OperationTypeSelection from "@/components/OperationTypeSelection";
import InputSystem from "@/components/InputSystem";

const HomePage = () => {
  const [operation, setOperation] = useState<"encryption" | "decryption">(
    "encryption"
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [operationResult, setOperationResult] = useState<string>("");

  const handleEncryption = async () => {
    if (!inputValue.trim() || !password.trim()) {
      toast.error("Both data to encrypt and password must be provided");
      return;
    }

    try {
      const encryptor = await createEncryptor();
      const result = await encryptor(inputValue, password);

      toast.success("Data encrypted successfully");

      console.log(result);
      setOperationResult(result);
      setInputValue("");
      setPassword("");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDecryption = async () => {
    if (!inputValue.trim() || !password.trim()) {
      toast.error("Both data to decrypt and access password must be provided");
      return;
    }

    try {
      const decryptor = await createDecryptor();
      const result = await decryptor(inputValue, password);

      toast.success("Data decrypted successfully");
      
      console.log(result)
      setOperationResult(result);
      setInputValue("");
      setPassword("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <header className='w-screen flex flex-col items-center'>
        <TopNavbar />
      </header>

      <main className='w-screen flex flex-col items-center p-6'>
        <OperationTypeSelection
          operation={operation}
          setOperation={setOperation}
        />

        <InputSystem
          operationType={operation}
          inputValue={inputValue}
          password={password}
          setInputValue={setInputValue}
          setPassword={setPassword}
        />

        <Button
          width='w-full'
          className='bg-card uppercase mt-8'
          icon={
            operation === "encryption" ? (
              <ShieldCheck className='w-5 h-5' />
            ) : (
              <Key className='w-4 h-4' />
            )
          }
          onClick={
            operation === "encryption" ? handleEncryption : handleDecryption
          }
        >
          {operation === "encryption" ? "secure" : "access"}
        </Button>
      </main>
    </>
  );
};

export default HomePage;
