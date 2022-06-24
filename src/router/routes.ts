import { AvailableGenders } from 'src/components/models';
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
            path: 'uomo',
            name: 'uomo',
            component: () => import('pages/ManPage.vue'),
          },
          {
            path: 'uomo/:categoryName',
            // name: 'uomo',
            component: () => import('pages/CategoryProducts.vue'),
            props: {
              gender: AvailableGenders.man,
            },
          },
          {
            path: 'donna',
            name: 'donna',
            component: () => import('pages/WomanPage.vue'),
          },
          {
            path: 'donna/:categoryName',
            // name: 'donna',
            component: () => import('pages/CategoryProducts.vue'),
            props: {
              gender: AvailableGenders.woman,
            },
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
