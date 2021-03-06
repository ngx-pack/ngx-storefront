import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './page/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: '',
        data: {
          animation: 'home',
        },
        loadChildren: () =>
          import('./page/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'product/:id',
        data: {
          animation: 'single-product',
        },
        loadChildren: () =>
          import('./page/single-product/single-product.module').then(
            (m) => m.SingleProductModule
          ),
      },
      {
        path: 'category/:id',
        data: {
          animation: 'category',
        },
        loadChildren: () =>
          import('./page/single-category/single-category.module').then(
            (m) => m.SingleCategoryModule
          ),
      },
      {
        path: 'cart',
        data: {
          animation: 'cart',
        },
        loadChildren: () =>
          import('./page/view-cart/view-cart.module').then(
            (m) => m.ViewCartModule
          ),
      },
      {
        path: 'checkout',
        data: {
          animation: 'checkout',
        },
        loadChildren: () =>
          import('./page/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
    ],
  },
  {
    path: 'error',
    data: {
      animation: 'error',
    },
    loadChildren: () =>
      import('./core/error-page/error-page.module').then(
        (m) => m.ErrorPageModule
      ),
  },
  {
    path: '**',
    data: {
      animation: 'notfound',
    },
    loadChildren: () =>
      import('./core/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
