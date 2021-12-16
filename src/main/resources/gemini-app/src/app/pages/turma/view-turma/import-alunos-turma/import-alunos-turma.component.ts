import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-import-alunos-turma',
  templateUrl: './import-alunos-turma.component.html',
  styleUrls: ['./import-alunos-turma.component.scss']
})
export class ImportAlunosTurmaComponent implements OnInit {

  keys: string[];
  dataSheet = new Subject();
  @ViewChild('inputFile') inputFile: ElementRef;
  isExcelFile: boolean;
  public excelData;

  @Input("isLoadingDataImport") public isLoadingDataImport: boolean = false;
  @Input("isLoadingRemoveStudents") public isLoadingRemoveStudents: boolean = false;
  @Output("onImportExcelData") public onImportExcelData: EventEmitter<any> = new EventEmitter();
  @Output("onRemoveExcelData") public onRemoveExcelData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(evt) {

    const target: DataTransfer = <DataTransfer>(evt.target);
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if (target.files.length > 1) {
      this.inputFile.nativeElement.value = '';
    }
    if (this.isExcelFile) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        this.excelData = XLSX.utils.sheet_to_json(ws);
      };

      reader.readAsBinaryString(target.files[0]);

      reader.onloadend = (e) => {
        this.onImportUserData();
      }
    } else {
      this.inputFile.nativeElement.value = '';
    }
  }

  private onImportUserData = () => {
    this.onImportExcelData.emit(this.excelData);
    this.inputFile.nativeElement.value = '';
    this.dataSheet.next(null);
    this.keys = null;
  }

  public removeData() {
    this.inputFile.nativeElement.value = '';
    this.dataSheet.next(null);
    this.keys = null;

    this.onRemoveExcelData.emit();
  }

}
