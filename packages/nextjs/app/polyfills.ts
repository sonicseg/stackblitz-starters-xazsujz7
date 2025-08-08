// Polyfill for indexedDB in StackBlitz
if (typeof window !== 'undefined' && !window.indexedDB) {
    // @ts-ignore - Simple mock for StackBlitz environment
    window.indexedDB = null;
  }
  
  export {};