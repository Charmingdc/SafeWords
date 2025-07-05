type Props = {
  operationType: string;
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
        placeholder={`${
          operationType === "encryption"
            ? "Enter or paste your words here"
            : "Paste secret data here"
        }`}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className='w-full min-h-80 bg-input text-input-foreground p-4'
      ></textarea>

      <input
        type='password'
        placeholder='Enter a password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        className='w-full h-14 bg-input text-input-foreground p-4'
      />
    </div>
  );
};

export default InputSystem;
