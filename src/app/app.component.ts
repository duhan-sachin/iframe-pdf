import { Component } from '@angular/core';
import { doc } from './doc';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public doc = doc;

  download(){
    const doc = new jsPDF();
    doc.html(this.doc, {
      callback:(doc)=>{
        doc.save();
      }
    }); 
  }
}
