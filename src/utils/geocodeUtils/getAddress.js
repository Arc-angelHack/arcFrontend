export default getAddress = async (lat, lng) => {
    const apiKey = 'AIzaSyBdyKhXMFEC7jxgwdcO8vQI_-H78181YYE';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=street_address&key=${apiKey}`;
    const response = await fetch(url);
    if (response.status === 200) {
        const location = {};
        const result = JSON.parse(response._bodyText);
        const resultObj = result.results[0];
        const address = resultObj.formatted_address;
        
        // Get location data
        location.city = resultObj.address_components[3].long_name;
        location.state = resultObj.address_components[5].short_name;
        location.zip = resultObj.address_components[7].long_name;

        const city = address.split(',');
        location.street = city[0];
        city.pop();
        location.formattedAddress = city.join(', ');
        return location;
    }
    return {
        formattedAddress: '',
        city: '',
        state: '',
        zip: '',
        street: '',
    };
};