import http from '../http-common';

class UserDataService {
	createUser(data) {
		return http.post('/users', data);
	}
	checkIfUserMailExist(mail) {
		return http.post("/users/checkmail", mail);
	}
}

export default new UserDataService();
