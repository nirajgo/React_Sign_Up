import http from '../http-common';

class LocalityDataService {
	getStates() {
		return http.get('/states');
	}
}

export default new LocalityDataService();
