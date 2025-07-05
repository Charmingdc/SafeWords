import { Shrink } from "lucide-react";

type Props = {
  operationType: "encryption" | "decryption";
  result: string;
  password: string;
  onClick: () => void;
};

const OutputModal = ({ operationType, result, password, onClick }: Props) => {
  return (
    <div className='w-screen h-screen fixed top-0 bottom-0 bg-black/80 flex items-center justify-center backdrop-blur-sm overflow-hidden z-10'>
      <div className='w-[90%] bg-card flex flex-col items-center text-card-foreground py-4 px-[5% -mt-6'>
        <div className='w-full flex items-center justify-between p-2 pt-0 border-b'>
          <h2 className='font-bold'>
            {operationType === "encryption"
              ? "Encrypted Text"
              : "Decrypted Text"}
          </h2>

          <button onClick={onClick} className='-mt-1'>
            <Shrink />
          </button>
        </div>

        <div className='w-[90%] h-60 bg-input px-[2%] mt-4'>
          {result} {password}
        </div>
      </div>
    </div>
  );
};

export default OutputModal;
