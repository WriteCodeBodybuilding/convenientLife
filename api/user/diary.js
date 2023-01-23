import {
	get,
	post,
	put
} from '@/utils/http'

//日记相应月份篇数查询
export const diaryQueryList= () => {
	return get('/user/diaryQuery')
}


//日记列表
export const diaryList= (params = {}) => {
	return get('/user/diary',params)
}

// 上传日记
export const uploadDiary= (data) => {
	return post('/user/diary',data)
}

//修改指定日记
export const diaryUpdata= (data) => {
	return put('/user/diary',data)
}