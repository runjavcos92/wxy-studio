import { Component } from '@angular/core';
//import * as _swal from 'sweetalert';
//import { SweetAlert } from 'sweetalert/typings/core';
import { MensajeService } from 'src/app/services/mensaje.service';
//const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent  {
  
  constructor(public _MensajeService: MensajeService) { }

  contactForm(appData) {
    this._MensajeService.sendMessage(appData).subscribe(() => {
      //swal("Nos pondrémos en contacto en seguida", "Gracias!", "success");
    });
  }
}




