import { AsyncStorage } from 'react-native';

export async function loadState() {
  try {
    const serializedState = await AsyncStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('error getting state from async storage', err);
    return undefined;
  }
}

export async function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('error saving state to async storage', err);
  }
}
