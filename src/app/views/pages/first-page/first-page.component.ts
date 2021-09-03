import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatButton, MatIconModule } from '@angular/material';
// import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { EmpCrudService } from '../emp-crud.service'
import { CompanyAPi, Company } from '../pages.module'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { NgForm } from '@angular/forms';

@Component({
	selector: 'first-page.component',
	styleUrls: ['first-page.component.scss'],
	templateUrl: 'first-page.component.html',
})
export class FirstPageComponent implements OnInit {
	displayedColumns = ['Name', 'Age', 'actions'];
	dataSource = new MatTableDataSource();
	resultsLength = 0;
	isLoadingResults = true;
	isRateLimitReached = false;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	searchkey: string;
	constructor(private http: HttpClient, public service: EmpCrudService, private modalService: NgbModal) { }
	ngOnInit() {

		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

		merge(this.sort.sortChange, this.paginator.page)
			.pipe(
				startWith({}),
				switchMap(() => {
					this.isLoadingResults = true;
					let x = this.service!.getCompanies('c890d3d6-8b1f-4c61-9f09-08d951be55e4',
						this.sort.active, this.sort.direction, this.paginator.pageIndex);
					return x;
				}),
				map(respAny => {
					let resp = respAny as HttpResponse<CompanyAPi>;
					let PaginationStr = resp.headers.get('X-Pagination');
					let Pagination = JSON.parse(PaginationStr);

					// Flip flag to show that loading has finished.
					this.isLoadingResults = false;
					this.isRateLimitReached = false;
					this.resultsLength = Pagination.TotalPages;
					 return resp.body.value;

				}),
				catchError(() => {
					this.isLoadingResults = false;
					// Catch if the GitHub API has reached its rate limit. Return empty data.
					this.isRateLimitReached = true;
					return observableOf([]);
				})
			).subscribe(data => this.dataSource.data = data);
	}
	closeResult: string;
	//constructor(private modalService: NgbModal) {}
	open(content) {
		this.modalService.open(content).result.then((result) => {
			this.closeResult = `Closed with: $\{result\}`;
		}, (reason) => { this.closeResult = `Dismissed $\{this.getDismissReason(reason)\}`; });
	}
	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: $\{reason}`;
		}
	}
	//onSubmit(form: NgForm) {
	// this.service.postEmployee().subscribe(
	//   res => {
	//this.resetForm(form);
	//this.service.refreshList();
	//this.toastr.success("Submited Success ","Payment Details Submit")
	// 	alert('osama')
	//   },
	//   err => {
	//     alert("error")
	//   }
	// )
	//}
	//deleteEmp(companyId,id : number){
	// this.service.deleteEmp(companyId,id)
	// .subscribe(
	//   res => {

	// 	//this.service.refreshList();
	// 	//this.toastr.error("Successfuly deleted", "Payment Datail register")
	//   },
	//   err => {
	// 	console.log(err)
	//   }
	// )
	// }
	onSearchClear() {
		this.searchkey = '';
		this.applyFilter();
	}
	applyFilter() {
		this.dataSource.filter = this.searchkey.trim().toLowerCase();
	}

}



/** An example database that the data source uses to retrieve data for the table. */

