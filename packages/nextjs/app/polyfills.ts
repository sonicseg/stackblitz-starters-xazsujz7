// StackBlitz-specific polyfills for Scaffold-ETH 2
// These fixes are required for the app to run in StackBlitz environment

if (typeof globalThis !== "undefined") {
  // 1. Fix for indexedDB not being available in StackBlitz
  if (!globalThis.indexedDB) {
    // @ts-ignore - Mock implementation for StackBlitz
    (globalThis as any).indexedDB = {
      open: () => {
        return {
          onsuccess: () => {},
          onerror: () => {},
          onupgradeneeded: () => {},
          result: {
            close: () => {},
            transaction: () => ({
              objectStore: () => ({
                get: () => ({ onsuccess: () => {}, onerror: () => {} }),
                put: () => ({ onsuccess: () => {}, onerror: () => {} }),
                delete: () => ({ onsuccess: () => {}, onerror: () => {} }),
                clear: () => ({ onsuccess: () => {}, onerror: () => {} }),
                openCursor: () => ({ onsuccess: () => {}, onerror: () => {} }),
                getAllKeys: () => ({ onsuccess: () => {}, onerror: () => {} }),
                getAll: () => ({ onsuccess: () => {}, onerror: () => {} }),
                count: () => ({ onsuccess: () => {}, onerror: () => {} }),
              }),
              oncomplete: () => {},
              onerror: () => {},
              onabort: () => {},
            }),
            createObjectStore: () => ({
              createIndex: () => {},
              deleteIndex: () => {},
            }),
          },
        };
      },
      deleteDatabase: () => ({ onsuccess: () => {}, onerror: () => {} }),
      cmp: () => 0,
    };
  }

  // 2. Fix for crypto.subtle in StackBlitz (sometimes missing)
  if (typeof crypto !== "undefined" && !crypto.subtle && typeof globalThis.crypto !== "undefined") {
    // @ts-ignore
    (globalThis.crypto as any).subtle = {
      digest: async () => new ArrayBuffer(0),
      generateKey: async () => null,
      importKey: async () => null,
      exportKey: async () => new ArrayBuffer(0),
      encrypt: async () => new ArrayBuffer(0),
      decrypt: async () => new ArrayBuffer(0),
      sign: async () => new ArrayBuffer(0),
      verify: async () => false,
    };
  }
}

export {};