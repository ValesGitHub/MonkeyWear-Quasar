import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
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
                component: () => import('pages/CategoryProducts.vue'),
                props: {
                  gender: 'M',
                  category: 'abbigliamento',
                },
              },
              {
                path: 'scarpe',
                name: 'scarpeUomo',
                component: () => import('pages/CategoryProducts.vue'),
                props: {
                  gender: 'M',
                  category: 'scarpe',
                },
              },
              {
                path: 'accessori',
                name: 'accessoriUomo',
                component: () => import('pages/CategoryProducts.vue'),
                props: {
                  gender: 'M',
                  category: 'accessori',
                },
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
                component: () => import('pages/CategoryProducts.vue'),
                props: {
                  gender: 'F',
                  category: 'abbigliamento',
                },
              },
              {
                path: 'scarpe',
                name: 'scarpeDonna',
                component: () => import('pages/CategoryProducts.vue'),
                props: {
                  gender: 'F',
                  category: 'scarpe',
                },
              },
              {
                path: 'accessori',
                name: 'accessoriDonna',
                component: () => import('pages/CategoryProducts.vue'),
                props: {
                  gender: 'F',
                  category: 'accessori',
                },
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
