/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import map_app from '@/app/map'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
})

// 添加手動配置的路由
router.addRoute({
  path: '/app/map',
  meta:{layout:"BlankLayout"},
  component: map_app
},)

export default router
