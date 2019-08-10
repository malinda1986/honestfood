import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [

  {
    id: '2',
    name: 'Users',
    zh: {
      name: '用户管理'
    },
    'pt-br': {
      name: 'Usuário'
    },
    icon: 'user',
    route: '/user',
  },
  
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
