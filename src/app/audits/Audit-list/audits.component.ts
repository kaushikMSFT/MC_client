
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuditService } from '../audit/audit.service';


@Component({
    selector : 'audits',
    //template : '<h2>{{title + " for " + getAuditingOrg()}}</h2>'
    /*template : `<h2>{{title + " for " + getAuditingOrg()}}</h2>
                <ul>
                    <li *ngFor="let audit of audits"> 
                        {{ audit }}
                    </li>
                </ul>
                <div (click)="onDivClick()">
                <!--input (keyup)="onKeyUp($event)" /-->
                <input [value]="firmName" (keyup.enter)="onKeyUp($event)" />
                <p>
                <input name="i1" #email (keyup.enter)="onEmailEntered(email.value)" />
                <p>
                <input name="i2" [(ngModel)]="firmName" (keyup.enter)="onKeyUp1()"/>
                <button  (click)="onSave($event)" class="btn btn-primary">Create New Portfolio</button>
                </div>
                `*/
        templateUrl : "./audits.component.html"
})

export class AuditsComponent {
    firmName = "E&Y";
    title = " List of Audits";
    private auditFirmName = "Earnest & Young";
    audits: any[] ;//= ["audit1", "audit2", "audit3"];

    constructor(auditService: AuditService, httpService: HttpClient )
    //constructor()
    {
        //let auditsService = new AuditsService();
        //this.audits = auditsService.getAudits();
        httpService.get("https://localhost:5001/weatherforecast").subscribe(response=>{
            this.audits = response as any[];
            console.log(this.audits);
        });
    }

    getAuditingOrg()
    {
        return this.auditFirmName;
    }

    onSave($event)
    {
        //$event.stopPropagation(); This will stop event bubbling
        console.log("Save clicked");
    }

    onDivClick()
    {
        console.log("Div clicked");
    }
    onKeyUp($event)
    {
        //if($event.keyCode===13) 
            //console.log($event.target.value + " was entered");
            console.log(this.firmName + "was  entered");
    }
    onKeyUp1()
    {
        //if($event.keyCode===13) 
            //console.log($event.target.value + " was entered");
            console.log(this.firmName + "was  entered");
    }
    onEmailEntered(email)
    {
        //template variables
        console.log(email + " Email entered")
    }

}