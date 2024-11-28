const localSetItem = <T>(key: string, value: T): void => {
  try {
    const castedToString = JSON.stringify(value);
    if (castedToString) {
      localStorage.setItem(key, castedToString);
    }
  } catch (e) {
    console.error("Error setting item in localStorage:", e);
  }
};

const localGetItem = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  } catch (e) {
    console.error("Error getting item from localStorage:", e);
    return null;
  }
};

const localRemoveItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error("Error removing item from localStorage:", e);
  }
};

export { localSetItem, localGetItem, localRemoveItem };