import { useState } from "react";

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
        >
          {operation === "encryption" ? "secure" : "access"}
        </Button>
      </main>
    </>
  );
};

export default HomePage;
