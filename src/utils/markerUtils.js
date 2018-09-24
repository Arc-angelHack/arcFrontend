export const spreadMarkers = (requests, incidents) => {
    const requestMarkers = requests.map(request => {
        request.type = 'sos';
        request.latlng = {
            latitude: parseFloat(request.latitude),
            longitude: parseFloat(request.longitude),
        }
        return request;
    });
    const incidentMarkers = incidents.map(incident => {
        incident.type = 'incident';
        incident.latlng = {
            latitude: parseFloat(incident.latitude),
            longitude: parseFloat(incident.longitude),
        }
        return incident;
    });
    return [...requestMarkers, ...incidentMarkers];
};