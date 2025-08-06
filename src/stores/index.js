import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

// 暴露所有的 store
// import { useUserStore } from './modules/user'
// export { useUserStore }

// import { useCountStore } from './modules/counter'
// export { useCountStore }

export * from './modules/user'
export * from './modules/counter'
