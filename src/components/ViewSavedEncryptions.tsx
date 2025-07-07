import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import copyToClipboard from "@/utils/clipboard";
import useIndexedDB from "@/hooks/useIndexDB";
import type { Entry } from "@/types/index";
import Button from "@/components/ui/Button";

const ViewSavedEncryptions = () => {
  const { getAllEntries, deleteEntry, deleteAllEntries } = useIndexedDB();

  const [entries, setEntries] = useState<Entry[]>([]);
  const [clickedEntryId, setClickedEntryId] = useState<string | null>(null);
  const [showEntriesModal, setShowEntriesModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const fetchEntries = useCallback(async () => {
    const res = await getAllEntries();
    setEntries(res);
  }, [getAllEntries]);

  useEffect(() => {
    if (showEntriesModal) {
      fetchEntries();
    }
  }, [showEntriesModal, fetchEntries]);

  const handleCopy = async (value: string) => {
    const res = await copyToClipboard(value);
    if (res.state === "error") return toast.error(res.message);

    toast.success(res.message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleModalClosing = () => {
    setShowEntriesModal(false);
    setClickedEntryIndex(null);
  };

  const handleEntryDeletion = async (id: string) => {
    try {
      await deleteEntry(id);
      toast.success("Entry deleted");
      fetchEntries();
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occured");
      }
    }
  };

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
        <div className='fixed inset-0 z-10 bg-black/80 backdrop-blur-sm flex items-center justify-center overflow-hidden'>
          <div className='w-[90%] max-h-[80vh] bg-card text-card-foreground py-4 px-[5%] flex flex-col gap-4 -mt-12 rounded-md'>
            <div className='w-full flex items-center justify-between pb-2 border-b'>
              <h2 className='font-extrabold text-lg'>Saved Entries</h2>
              <button
                onClick={handleModalClosing}
                className='text-sm text-muted-foreground hover:underline'
              >
                Close
              </button>
            </div>

            <div className='w-full flex-1 flex flex-col gap-2 overflow-y-auto'>
              {entries.length === 0 ? (
                <p className='text-center text-muted-foreground py-4'>
                  No saved entries yet.
                </p>
              ) : (
                entries.map((entry, i) => {
                  const isActive = clickedEntryId === entry.id;

                  return (
                    <div
                      key={`${entry.id}${i}`}
                      onClick={() => setClickedEntryId(entry.id)}
                      className={`w-full flex ${
                        isActive
                          ? "h-auto flex-col border-y"
                          : "h-14 items-center bg-input px-2"
                      } py-4 cursor-pointer rounded-md transition-all duration-300`}
                    >
                      {!isActive ? (
                        <p className='w-full overflow-hidden whitespace-nowrap text-ellipsis'>
                          {entry.data}
                        </p>
                      ) : (
                        <>
                          <p className='text-sm font-medium'>Full Output</p>
                          <div className='w-full max-h-60 bg-input break-words overflow-y-auto py-2 px-[2%] mb-3 rounded'>
                            {entry.data}
                          </div>

                          <p className='text-sm font-medium'>Password</p>
                          <p className='w-full min-h-12 bg-input break-words overflow-y-auto py-2 px-[2%] mb-2 rounded'>
                            {entry.password}
                          </p>

                          <div className='w-full flex items-center gap-2'>
                            <Button
                              width='w-fit'
                              className='py-[.2rem]'
                              onClick={() => handleCopy(entry.data)}
                            >
                              {isCopied ? "Copied" : "Copy"}
                            </Button>
                            <Button
                              className='border-red-400 py-[.2rem]'
                              onClick={() => handleEntryDeletion(entry.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {entries.length > 0 && (
              <Button
                className='py-1'
                onClick={async () => await deleteAllEntries()}
              >
                Clear All
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ViewSavedEncryptions;
