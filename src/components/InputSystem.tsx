type Props = {
  operationType: "encryption" | "decryption";
  inputValue: string;
  password: string;
  setInputValue: (value: string) => void;
  setPassword: (value: string) => void;
};

const InputSystem = ({
  operationType,
  inputValue,
  password,
  setInputValue,
  setPassword
}: Props) => {
  return (
    <div className='w-full flex flex-col items-center gap-3 mt-6'>
      <textarea
        {...(operationType === "decryption" && {
          spellCheck: false,
          autoCorrect: "off",
          autoCapitalize: "off"
        })}
        placeholder={
          operationType === "encryption"
            ? "Enter or paste your words here"
            : "Paste secret data here"
        }
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className='w-full min-h-80 bg-input text-input-foreground p-4'
      />

      <input
        type='password'
        placeholder={`${
          operationType === "encryption"
            ? "Enter a password for encryption"
            : "Enter the password used to encrypt"
        }`}
        value={password}
        onChange={e => setPassword(e.target.value)}
        className='w-full h-14 bg-input text-input-foreground p-4'
      />
    </div>
  );
};

export default InputSystem;
