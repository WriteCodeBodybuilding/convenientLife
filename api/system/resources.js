import {
	get,
	post,
	put
} from '@/utils/http'


//图文列表
export const resourcesList= (params = {}) => {
	return get('/system/resources',params)
}


// 每日一言
export const getASentence= () => {
	return get('/system/ASentence')
}
