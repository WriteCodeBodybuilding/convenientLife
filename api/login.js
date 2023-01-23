import {
	get,
	post,
} from '../utils/http'


//登录
export const login= (data) => {
	return post('/login',data)
}
