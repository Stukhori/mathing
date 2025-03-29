// src/utils/auth.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCurrentUserId = async (): Promise<number | null> => {
  try {
    const userId = await AsyncStorage.getItem('userId');
    return userId ? parseInt(userId) : null;
  } catch (error) {
    console.error('Failed to get user ID:', error);
    return null;
  }
};

export const storeAuthData = async (token: string, userId: number) => {
  try {
    await AsyncStorage.multiSet([
      ['authToken', token],
      ['userId', userId.toString()]
    ]);
  } catch (error) {
    console.error('Failed to store auth data:', error);
  }
};