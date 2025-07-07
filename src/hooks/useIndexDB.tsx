import { useCallback } from "react";
import type { Entry } from "@/types/index";
import { openDB } from "@/lib/indexedDB";

const useIndexedDB = () => {
  const saveEntry = useCallback(async (entry: Entry): Promise<string> => {
    const db = await openDB();
    const tx = db.transaction("entries", "readwrite");
    const store = tx.objectStore("entries");

    const allEntriesRequest = store.getAll();
    const existingEntries: Entry[] = await new Promise((resolve, reject) => {
      allEntriesRequest.onsuccess = () =>
        resolve(allEntriesRequest.result as Entry[]);
      allEntriesRequest.onerror = () => reject(allEntriesRequest.error);
    });

    const isDuplicate = existingEntries.some(
      e => e.data === entry.data && e.password === entry.password
    );

    if (isDuplicate) {
      db.close();
      throw new Error("Duplicate entry (same data and password)");
    }

    const request = store.add(entry);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        db.close();
        resolve(entry.id);
      };
      request.onerror = () => reject(request.error);
    });
  }, []);

  const deleteEntry = useCallback(async (id: string): Promise<void> => {
    const db = await openDB();
    const tx = db.transaction("entries", "readwrite");
    const store = tx.objectStore("entries");
    store.delete(id);
    tx.oncomplete = () => db.close();
  }, []);

  const getAllEntries = useCallback(async (): Promise<Entry[]> => {
    const db = await openDB();
    const tx = db.transaction("entries", "readonly");
    const store = tx.objectStore("entries");
    const request = store.getAll();

    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result as Entry[]);
      request.onerror = () => reject(request.error);
    });
  }, []);

  const deleteAllEntries = useCallback(async (): Promise<void> => {
    const db = await openDB();
    const tx = db.transaction("entries", "readwrite");
    const store = tx.objectStore("entries");

    const request = store.clear();

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        db.close();
        resolve();
      };
      request.onerror = () => {
        db.close();
        reject(request.error);
      };
    });
  }, []);

  return {
    saveEntry,
    deleteEntry,
    getAllEntries,
    deleteAllEntries
  };
};

export default useIndexedDB;
