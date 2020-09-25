import { ClientFirm } from './../../shared/clientFirm.model';
import { AuditService } from './audit.service';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  clientFirms : ClientFirm[];
  auditService: AuditService;
  constructor(auditService: AuditService) {
    this.auditService=auditService;
    this.clientFirms = auditService.getClientFirms();
     console.log(this.clientFirms);
   }

  ngOnInit(): void {
    this.auditService.formData = {
      AuditCode:'0',
      Description:'',
      AuditorFirm:'',
      ClientFirm:'',
      ReleaseDate:''
    }
  }

  SaveAudit(form: NgForm)
  {
    this.auditService.Create().subscribe(response=>{
      //form.form.reset;
      console.log(response);
    });
    console.log(form);
  }

}

