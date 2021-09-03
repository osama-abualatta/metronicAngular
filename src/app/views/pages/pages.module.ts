// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { MyPageComponent } from './my-page/my-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { MatTableModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,
	MatRippleModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import{NgbModalModule} from '@ng-bootstrap/ng-bootstrap'

@NgModule({
	declarations: [MyPageComponent, FirstPageComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
		MatTableModule,
		MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatPaginatorModule ,
		MatSortModule,
		NgbModalModule
	],
	providers: []
})
export class PagesModule {
}
 export class CompanyAPi{
	 value :any
	CompanyAPi =new Company
 }
 export class Company{
	 Age:number;
	 Name:string
 }
