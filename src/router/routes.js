
const routes = [
  {
    path: '/dinesh/',
    component: () => import('layouts/MainLayout.vue'),
  },
  { path: '/dinesh/technicalskills', component: () => import('src/pages/TechnicalSkills.vue') },
  { path: '/dinesh/hobbies', component: () => import('src/pages/MyHobbies.vue') },
  { path: '/dinesh/edu', component: () => import('src/pages/MyEducation.vue') },
  {path: '/dinesh/home', component: () => import('layouts/MainLayout.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
