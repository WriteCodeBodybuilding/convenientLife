import Vue from 'vue'
import Vuex from 'vuex'
import moduleUser from './user.js'

Vue.use(Vuex)


const store  = new Vuex.Store({
	modules:{
		my_user:moduleUser
	}
})


export default store