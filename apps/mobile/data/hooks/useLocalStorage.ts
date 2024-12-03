import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

export const useLocalStorage = () => {
  const salvarItem = useCallback(async function (key: string, value: any) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getItem = useCallback(async function (key: string) {
    const values = await AsyncStorage.getItem(key);
    return values ? JSON.parse(values) : null;
  }, []);

  const removeItem = useCallback(async function (key: string) {
    await AsyncStorage.removeItem(key);
  }, []);

  return { salvarItem, getItem, removeItem };
};
