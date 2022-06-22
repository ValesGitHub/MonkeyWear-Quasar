import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '',
        component: () => import('layouts/TabsLayout.vue'),
        children: [
          {
            path: '/uomo',
            name: 'uomo',
            component: () => import('pages/ManPage.vue'),
            children: [
              {
                path: 'abbigliamento',
                name: 'abbigliamentoUomo',
                component: () => import('pages/ManPage.vue'),
              },
              {
                path: 'scarpe',
                name: 'scarpeUomo',
                component: () => import('pages/ManPage.vue'),
              },
              {
                path: 'accessori',
                name: 'accessoriUomo',
                component: () => import('pages/ManPage.vue'),
              },
            ],
          },
          {
            path: '/donna',
            name: 'donna',
            component: () => import('pages/WomanPage.vue'),
            children: [
              {
                path: 'abbigliamento',
                name: 'abbigliamentoDonna',
                component: () => import('pages/WomanPage.vue'),
              },
              {
                path: 'scarpe',
                name: 'scarpeDonna',
                component: () => import('pages/WomanPage.vue'),
              },
              {
                path: 'accessori',
                name: 'accessoriDonna',
                component: () => import('pages/WomanPage.vue'),
              },
            ],
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
