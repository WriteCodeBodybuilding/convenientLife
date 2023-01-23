import {
	get,
	post,
} from '../utils/http'


//获取个人简介
export const getResume = (params = {}) => {
	return get('/resume', params)
}