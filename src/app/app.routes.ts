import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './parts/home/home';
import { Userprofile } from './AcctSettings/userprofile/userprofile';
import { Paymentinfo } from './AcctSettings/paymentinfo/paymentinfo';
import { Userbio } from './AcctSettings/userbio/userbio';

export const routes: Routes = [
   {path: 'home',
    component: Home},

    {path: 'profile',
    component: Userprofile},

   { path: 'paymentinfo',
    component: Paymentinfo},

   { path: 'bio',
    component: Userbio}
];
