import { useState } from "react";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import copyToClipboard from "@/utils/clipboard";
import { useIndexedDB } from "@/hooks/useIndexDB";

type Props = {
  operationType: "encryption" | "decryption";
  operationResult: { result: string; password: string };
  onClick: () => void;
};

const OutputModal = ({ operationType, operationResult, onClick }: Props) => {
  const { saveEntry } = useIndexedDB();

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  const handleCopy = async (value: string) => {
    const res = await copyToClipboard(value);
    if (res.state === "error") {
      toast.error(res.message);
    }

    toast.success(res.message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const saveData = async () => {
    try {
      setSaving(true);

      const id = crypto.randomUUID();
      const res = await saveEntry({
        id,
        data: operationResult.result,
        password: operationResult.password
      });

      toast.success("Entry saved successfully");
      
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className='w-screen h-screen fixed top-0 bottom-0 bg-black/80 flex items-center justify-center backdrop-blur-sm overflow-hidden z-10'>
      <div className='w-[90%] bg-card flex flex-col items-center gap-4 text-card-foreground py-4 px-[5% -mt-6'>
        <div className='w-full flex items-center justify-between pb-2 px-[5%] border-b'>
          <h2 className='font-extrabold'>
            {operationType === "encryption"
              ? "Encrypted Text"
              : "Decrypted Text"}
          </h2>

          <button onClick={onClick} className='-mt-1'>
            Close
          </button>
        </div>

        <div className='w-[90%] h-60 bg-input break-words overflow-y-auto py-2 px-[2%]'>
          {operationResult.result}
        </div>

        {operationType === "encryption" && (
          <p className='w-[90%] min-h-14 bg-input break-words overflow-y-auto py-2 px-[2%]'>
            {operationResult.password}
          </p>
        )}

        <div className='w-[90%] flex items-center gap-4'>
          <Button
            className='py-1'
            onClick={() => handleCopy(operationResult.result)}
          >
            {isCopied ? "Copied" : "Copy"}
          </Button>
          {operationType === "encryption" && (
            <Button className='py-1' onClick={() => saveData()}>
              {saving ? "Saving..." : "Save"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutputModal;
