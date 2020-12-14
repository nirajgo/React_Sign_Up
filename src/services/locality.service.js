import http from '../http-common';

class LocalityDataService {
	getStates() {
		return http.get('/states');
	}
	getCities() {
		return http.get('/cities');
	}
}

export default new LocalityDataService();
