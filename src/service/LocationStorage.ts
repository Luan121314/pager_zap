import AsyncStorage from "@react-native-async-storage/async-storage";

class LocationStorage {
    async setData(object: object):Promise<void> {
        try {
            const dataString = JSON.stringify(object)
            await AsyncStorage.setItem('@pagerZapPreferences', dataString)
        } catch (e) {
            console.log("Error Storage ", e.message);

        }
    }
    async getData():Promise<any> {
        try {
            const data = await AsyncStorage.getItem('@pagerZapPreferences')
            const dataJson = JSON.parse(data || "{}");
            return dataJson;
        } catch (e) {
            console.log("Error Storage ", e.message);

        }
    }
}

export default new LocationStorage();