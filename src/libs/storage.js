import {AsyncStorage} from '@react-native-async-storage/async-storage';

class Storage {
  static instance = Storage();

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('storage error ', error);

      return false;
    }
    get = async (key) => {
      try {
        return await AsyncStorage.getItem(key);
      } catch (error) {
        console.log('storage get err', error);

        throw Error(error);
      }
    };
  };

  multiGet = async (keys) => {
      try {
        return await AsyncStorage.multiGet(keys);
      }catch(error){
          console.log("storage multiGet error", error);

          throw Error(error)
      }
  }

  getAllKeys = async () => {
      try{
        return await AsyncStorage.getAllKeys();
      }catch(error){
          console.log("storage getAllKeys error", error);

          throw Error(error);
      }
  }

    remove = async (key) => {
      try {
        return await AsyncStorage.removeItem(key);

        return true;
      } catch (error) {
        console.log('storage remove err', error);
      
        return false;
    }
    };
  };
  
}
