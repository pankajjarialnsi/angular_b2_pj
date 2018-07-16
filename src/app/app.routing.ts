import { Routes, RouterModule } from '@angular/router'; 
import { HeadComponent } from './head/head.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
const appRoutes: Routes = [        
	{ path: '', component:  ListUserComponent },
	{ path: 'list_user', component: ListUserComponent},
	{ path: 'user_profile' , component: UserProfileComponent } 
];
export const routing = RouterModule.forRoot(appRoutes);