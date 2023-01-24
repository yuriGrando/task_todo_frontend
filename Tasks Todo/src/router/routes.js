
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/tasks', component: () => import('pages/Tasks.vue') },
      { path: '/accounts', component: () => import('pages/Accounts.vue') },
      { path: '/users', component: () => import('pages/Users.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
