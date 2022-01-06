const cookieparser = process.server ? require('cookieparser') : undefined

 // 在服务端渲染期间运行的都是同一个实例
 // 为了防止数据冲突， 务必要将state定义成一个函数，返回数据对象
export const state = () => {
  return {
    // 当前用户的登录状态
    user: null,
  }
}

export const mutations = {
  setUser (state,user) {
    state.user = user
  }
}

export const actions = {
  // 特殊的nuxt独有的action，会在服务端运行期间自动调用
  // 作用，初始化容器数据， 传递数据给客户端使用
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      // 使用cookieparser把cookie解析成js对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}