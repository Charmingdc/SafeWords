import Button from "@/components/ui/Button";

type Props = {
  operation: string;
  setOperation: (operation: string) => void;
};

const OperationTypeSelection = ({ operation, setOperation }: Props) => {
  return (
    <div className='w-full flex flex-col gap-3 mt-4'>
      <p> Choose a operation to perform </p>

      <div className='w-full flex items-center justify-between'>
        <Button
          className={`uppercase ${
            operation === "encryption" ? "border-double border-[.2rem]" : ""
          }`}
          onClick={() => setOperation("encryption")}
        >
          Encryption
        </Button>

        <Button
          className={`uppercase ${
            operation === "decryption" ? "border-double border-[.2rem]" : ""
          }`}
          onClick={() => setOperation("decryption")}
        >
          Decryption
        </Button>
      </div>
    </div>
  );
};

export default OperationTypeSelection;
