import { Component  } from '@angular/core';
import { Validators, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  public messageForm: UntypedFormGroup;

  constructor(private firestore: Firestore, private fb: UntypedFormBuilder) {
    this.messageForm = fb.group({
      email: ['', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'
      }],
      note: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  public onSubmit() {
    const coll = collection(this.firestore, 'submissions')
    addDoc(coll, {
      to: ['gen.twohig@gmail.com'],
      message: {
        subject: 'Someone sent me a  message from my website!',
        text: `Email: ${this.messageForm.get('email')?.value}
               Message: ${this.messageForm.get('note')?.value}`,
        html: `Email: ${this.messageForm.get('email')?.value}<br/>
               Message: ${this.messageForm.get('note')?.value}`
      }
    })
  }
}

