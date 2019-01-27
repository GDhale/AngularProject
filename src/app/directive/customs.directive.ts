import { Directive, ElementRef } from '@angular/core';
@Directive({
   selector: '[appChangeText]'
})
export class CustomsDirective {
   constructor(Element: ElementRef) {
      // console.log(Element);
      Element.nativeElement.innerText = "Text is changed by changeText Directive.";
   }
}
@Directive({
   selector: '[only-alphabets]'
})
export class OnlyAlphabtes {
   constructor(public el: ElementRef) {
      this.el.nativeElement.onkeypress = (evt) => {
         if (!((evt.which >= 97 && evt.which <= 122) 
               || (evt.which >= 65 && evt.which <= 90))) {
            evt.preventDefault();
         }
      };
   }
}
   @Directive({
      selector: '[only-Numbers]'
   })
   export class OnlyNumber {
      constructor(public e: ElementRef) {
         this.e.nativeElement.onkeypress = (evet) => {
            if (!(evet.which >= 48 && evet.which <= 57)) 
                {
                  evet.preventDefault();
                }
         };
      }
}

