import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
    selector: 'kt-modal',
    templateUrl: './modal.component.html',
   styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
	nameFormControl = new FormControl('', [
		Validators.required,
		//Validators.email,
	  ]);
		//matcher = new MyErrorStateMatcher();
    closeResult: string;
    constructor(private modalService: NgbModal) {}
    open(content) {
        this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: $\{result\}`;
        }, (reason) => {this.closeResult = `Dismissed $\{this.getDismissReason(reason)\}`;});
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: $\{reason}`;
        }
    }
}
