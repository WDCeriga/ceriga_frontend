interface SizeItem {
  param: string;
  value: number;
}

interface Measurement {
  name: string;
  char: string;
  list: SizeItem[];
}
export const resetValuesToZero = (arr: Measurement[]): Measurement[] => {
  return arr?.map((measurement) => ({
    ...measurement,
    list: measurement.list?.map((item) => ({
      ...item,
      value: 0,
    })) || [], 
  })) || []; 
};

export const checkCorrectTableSizes = (arr: Measurement[]): boolean => {
  let isCorrect = true;
  arr?.forEach((measurement) => {
    measurement.list?.forEach((item) => {
      if (item.value <= 0) {
        isCorrect = false;
      }
    });
  });
  return isCorrect;
};

export const checkOneSizeTableSizes = (arr: Measurement[]): boolean => {
  if (!arr || arr.length === 0 || !arr[0].list || arr[0].list.length === 0) {
    return false;
  }
  const columnLength = arr.length;
  for (let i = 0; i < arr[0].list.length; i++) {
    let isColumnFilled = true;

    for (let j = 0; j < columnLength; j++) {
      if (arr[j]?.list[i]?.value <= 0) {
        isColumnFilled = false;
        break;
      }
    }

    if (isColumnFilled) {
      return true;
    }
  }
  return false;
};

export const hasValidFilledColumn = (arr: Measurement[]): boolean => {
  if (!arr || arr.length === 0 || !arr[0].list || arr[0].list.length === 0) {
    return false;
  }
  const columnLength = arr.length;

  for (let i = 0; i < arr[0].list.length; i++) {
    let isColumnFilled = true;

    for (let j = 0; j < columnLength; j++) {
      if (arr[j]?.list[i]?.value <= 0) {
        isColumnFilled = false;
        break;
      }
    }
    if (isColumnFilled) {
      return true;
    }
  }

  return false;
};