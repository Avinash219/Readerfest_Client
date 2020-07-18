import { Validators } from '@angular/forms';
import { FormStatus } from '../Enums/FormStatus';

export default class Helper {
   static setValidators(formInstance){
      Object.keys(formInstance.controls).forEach((control) => {
        formInstance.get(control).setValidators([Validators.required]);
        formInstance.get(control).updateValueAndValidity();
      })
   }

   static fieldValidator(instanceForm, field){
    return instanceForm.get(field).status === FormStatus.INVALID
   }
}
