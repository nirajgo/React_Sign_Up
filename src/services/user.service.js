import http from '../http-common';

class UserDataService {
	createUser(data) {
		return http.post('/users', data);
	}
	checkIfUserMailExist(mail) {
		return http.get('/users/mails', mail);
	}
}

export default new UserDataService();
