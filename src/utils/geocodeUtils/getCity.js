export default getCity = async (lat, lng) => {
    const apiKey = 'AIzaSyBdyKhXMFEC7jxgwdcO8vQI_-H78181YYE';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=locality&key=${apiKey}`;
    const response = await fetch(url);
    if (response.status === 200) {
        const result = JSON.parse(response._bodyText);
        const address = result.results[0].formatted_address;
        const city = address.split(',');
        city.pop();
        return city.join(', ');
    }
    return '';
};