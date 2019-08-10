/* global window */
import modelExtend from 'dva-model-extend'
import { pathMatchRegexp } from 'utils'
import api from 'api'
import { pageModel } from 'utils/model'
import {message} from 'antd'

const {
  queryUserList,
  createUser,
  removeUser,
  updateUser,
  removeUserList,
  userList,
} = api

export default modelExtend(pageModel, {
  namespace: 'user',

  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    selectedRowKeys: [],
  },

  effects: {
    *query({ payload = {} }, { call, put }) {
      const data = yield call(queryUserList, payload)
      const { response } = data
      console.log('dddddd=====',response.body)
      message.info(response.body.message);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: response.body,
          },
        })
      }
    },

  },

  reducers: {
    showModal(state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal(state) {
      return { ...state, modalVisible: false }
    },
  },
})
