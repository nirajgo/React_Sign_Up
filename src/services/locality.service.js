import http from '../http-common';

class LocalityDataService {
	getStates() {
		return http.get('/states');
	}
	getCitiesByState() {
		return http.get('/cities');
	}
}

export default new LocalityDataService();
