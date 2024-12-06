import React from "react";

export function validate_Checkboxes(checkboxes) {
   if(Array.isArray(checkboxes)){ 
   const isValid = checkboxes.some( (fqe) => fqe === true );
   return ( <div>
    {isValid ? null : (<div style="color: red, fontSize: 12px">At least one FQE has to be selected!</div>)}
    </div>
   )
}
};

