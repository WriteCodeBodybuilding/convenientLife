const {
	baseUrl
} = require('./config')
import {
	getToken
} from './auth'


function request(method, url, data) {

	let header = {
		'content-type': 'application/json;x-www-form-urlencoded',
	}
	const token = getToken()
	if (token) {
		header.token = token
	}

	return new Promise(function(resolve, reject) {
		uni.request({
			url: baseUrl + url,
			method: method,
			data: method === 'POST' ? JSON.stringify(data) : data,
			header: header,
			success(res) {
				resolve(res.data);
			},
			fail(err) {
				reject(err.data);
			}
		})
	})
}

function get(url, params = {}) {
	let header = {
		'content-type': 'application/json',
	}
	const token = getToken()
	if (token) {
		header.token = token
	}
	url += '?'
	for (let key in params) {
		url += key + '=' + params[key] + '&'
	}
	url = url.slice(0, url.length - 1)


	return new Promise(function(resolve, reject) {
		uni.request({
			url: baseUrl + url,
			method: 'GET',
			header: header,
			success(res) {
				if (res.data.code === 200) {
					resolve(res.data);
				} else {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				}
			},
			fail(err) {
				reject(err.data);
			}
		})
	})

}

function post(url, data = {}, ) {
	let header = {
		'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
	}
	const token = getToken()
	if (token) {
		header.token = token
	}
	return new Promise(function(resolve, reject) {
		uni.request({
			url: baseUrl + url,
			method: 'POST',
			header: header,
			data: data,
			success(res) {
				if (res.data.code === 200) {
					resolve(res.data);
				} else {
					uni.showToast({
						title: res.data.message,
						icon: "none"
					})
				}
			},
			fail(err) {
				reject(err.data);
			}
		})
	})

}
function put(url, data = {}, ) {
	let header = {
		'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
	}
	const token = getToken()
	if (token) {
		header.token = token
	}
	return new Promise(function(resolve, reject) {
		uni.request({
			url: baseUrl + url,
			method: 'PUT',
			header: header,
			data: data,
			success(res) {
				if (res.data.code === 200) {
					resolve(res.data);
				} else {
					uni.showToast({
						title: res.data.message,
						icon: "none"
					})
				}
			},
			fail(err) {
				reject(err.data);
			}
		})
	})

}
function uploadFile(tempFilePaths) {

	const token = getToken()

	return new Promise(function(resolve, reject) {
		uni.uploadFile({
			url: baseUrl + '/file/upload',
			filePath: tempFilePaths,
			name: 'file',
			formData: {
				'token': token
			},
			success(res) {
				if (res.statusCode == 413) {
					wx.showToast({
						title: '文件太大',
						icon: 'error'
					})
				} else {
					resolve(JSON.parse(res.data));
				}

			},
			fail(res) {
				reject(JSON.parse(res.data));
			}
		})
	})


}


module.exports = {
	request,
	post,
	get,
	put,
	uploadFile
}
