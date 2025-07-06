import { useState } from "react";
import Button from "@/components/ui/Button";

const ViewSavedEncryptions = () => {
  const [showEntriesModal, setShowEntriesModal] = useState<boolean>(false);

  return (
    <>
      <Button
        width='w-full'
        className='mt-4'
        onClick={() => setShowEntriesModal(true)}
      >
        View Saved Encryptions
      </Button>

      {showEntriesModal && (
        <div className='w-screen h-screen fixed top-0 left-0 bg-black/80 flex items-center justify-center backdrop-blur-sm overflow-hidden z-10'>
          <div
            className='w-[90%] max-h-[80vh] bg-card flex flex-col gap-4
          text-card-foreground py-4 px-[5%] -mt-12'
          >
            <div className='w-full flex items-center justify-between pb-2 px-[5%] border-b'>
              <h2 className='font-extrabold'>Saved Entries</h2>
              <button
                onClick={() => setShowEntriesModal(false)}
                className='-mt-1'
              >
                Close
              </button>
            </div>

            <div className='w-full flex-1 flex flex-col gap-2 overflow-y-auto'>
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className='w-full h-14 bg-input flex items-center
                  justify-between py-4 px-2'
                >
                  <p className='w-[80%] overflow-hidden whitespace-nowrap text-ellipsis'>
                    Ndjdjdbejsjdjjdjdhdjdhdiwjbsjzjsjdbdndjdjdjdnndjdjdjdjdjdjdjd
                  </p>
                  <p>Del</p>
                </div>
              ))}
            </div>

            <Button className='py-1'>Clear All</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewSavedEncryptions;
