import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { Module } from 'vuex'
import UserState from './UserState'
import RootState from '@/store/RootState'

const userModule: Module<UserState, RootState> = {
    namespaced: true,
    state: {
      token: '',
      current: null,
      currentFacility: {},
      currentEComStore: {},
      instanceUrl: '',
      facilityLocationsByFacilityId: {},
      productIdentificationPref: {
        primaryId: 'productId',
        secondaryId: '',
        fromDate: ''
      }
    },
    getters,
    actions,
    mutations,
}

// TODO
// store.registerModule('user', userModule);
export default userModule;