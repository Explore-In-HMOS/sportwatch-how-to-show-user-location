import geolocation from '@ohos.geolocation';

export default {
    data: {
        lat: '',
        long: ''
    },
    onInit() {
        geolocation.on('locationChange', requestInfo, this.locationChange);
    },
    onDestroy(){
        geolocation.off('locationChange',this.locationChange);
    },
    locationChange(location){
        this.lat = location.latitude
        this.long = location.longitude
        console.info(`locationChanger: data: ${JSON.stringify(location)}`);
    }
};

let requestInfo = {'priority': 0x201, 'timeInterval': 0, 'distanceInterval': 0, 'maxAccuracy': 0};
