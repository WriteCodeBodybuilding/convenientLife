import {
	get,
	post,
	put
} from '@/utils/http'


//消息列表
export const newsList= (params = {}) => {
	return get('/system/news',params)
}

//修改指定消息
export const newsUpdata= (data) => {
	return put('/system/news',data)
}