import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
// import {CompanyAPi}from './pages.module'
@Injectable({
  providedIn: 'root'
})
export class EmpCrudService {
	constructor(private http:HttpClient ) {}
	// formData : CompanyAPi = new CompanyAPi();
	readonly href = 'https://localhost:44333/api/';
	getCompanies(companyId: string,sort: string, order: string, page: number): Observable<any> {
		//console.log(sort,order);
	   let _headers = new HttpHeaders();
	   _headers = _headers.set('Accept', 'application/vnd.codemaze.hateoas+json');

	   //const href = 'https://localhost:44333/api/';
	   const requestUrl =
	   `${this.href}companies/${companyId}/employees?pageNumber=${page + 1}&pageSize=2&searchTerm=A&orderBy=${sort + ' ' + order}&fields=name,age`;
	   return this.http.get<any>(requestUrl,{
		   headers: _headers,
		   observe: 'response'
		});
	 }

	//  postEmployee(companyId){
	// 	const href = 'https://localhost:44333/api/';
	// 	const reqUrl=`${href}companies/${companyId}/employees`
	// 	   return this.http.post(href,this.formData);
	// 	   }
	// deleteEmp(companyId,id :number){
	// 	const href = 'https://localhost:44333/api/';
	// 	const reqUrl=`${href}companies/${companyId}/employees`
	// 	return this.http.delete(`${reqUrl}/${id}`);
	// }

	updateEmp(companyId,id){
		const href = 'https://localhost:44333/api/';
		const reqUrl=`${href}companies/${companyId}/employees`
   return this.http.put(`${reqUrl}/${id}`,this.updateEmp);

	}

}

