import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        conuter : 1000, 
        deleteModalObj : {
            showDeleteModal: false, 
            deleteUrl : '', 
            data : null, 
            deletingIndex: -1, 
            isDeleted : false,

        }, 
        user: false, 
        userPermission: null
    }, 
    getters: {
        getCounter(state){
          
           return state.conuter
        }, 
        getDeleteModalObj(state){
            return state.deleteModalObj
        }, 
        
        getUserPermission(state){
            return state.userPermission
        }, 
        

        

       

    },

    mutations: {
        changeTheCounter(state, data){
            state.conuter += data
        }, 
        setDeleteModal(state, data){
            const deleteModalObj = {
                showDeleteModal: false, 
                deleteUrl : '', 
                data : null, 
                deletingIndex: -1, 
                isDeleted : data,
            }
            state.deleteModalObj = deleteModalObj
        },
        setDeletingModalObj(state, data){
            state.deleteModalObj = data
        },
        setUpdateUser(state, data){
            state.user = data
        },
        setUserPermission(state, data){
            state.userPermission = data
        },
        
    }, 



    actions :{
        changeCounterAction({commit}, data){
            commit('changeTheCounter', data)
        }
    }


})