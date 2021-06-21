import { SERVICES } from '../../services/services';

export const AUTH_USER_PENDING = 'AUTH_USER_PENDING';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';

export const authUser = (data) => {
	return dispatch => {
		const url = `${SERVICES.BASE_URL}${SERVICES.apis.auth.url}`;
		dispatch({ type: AUTH_USER_PENDING, payload: null });

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},		
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(res => dispatch({ type: AUTH_USER_SUCCESS, payload: res.data }))
			.catch(err => dispatch({ type: AUTH_USER_ERROR, payload: err }));
	}
}