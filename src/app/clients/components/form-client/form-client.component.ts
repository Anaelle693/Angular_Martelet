import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() init!: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter<Client>();

  public form!: FormGroup;
  public states = Object.values(StateClient);

  constructor( private fb: FormBuilder) { }
  /* formulaire
   - name: obligatoire
   - tva
   - totalCaHt
   - state
   - comment
   - id
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      name : [this.init.name, Validators.required],
      tva: [this.init.tva],
      totalCaHt: [this.init.totalCaHt],
      state : [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id]
    });

  }
  // soummission du formulaire
  public onSubmit(): void{
    this.submited.emit(this.form.value)
  }

}
