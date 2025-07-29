import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-upload',
    standalone: false,
    templateUrl: './upload.html',
    styleUrl: './upload.css'
})
export class Upload {

    cols: string[] = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
    ];

    fields = [
        { name: 'colaborador', label: 'Colaborador', column: 0 },
        { name: 'data', label: 'Data', column: 1 },
        { name: 'horarioInicio', label: 'Horário - Início', column: 2 },
        { name: 'horarioTermino', label: 'Horário - Término', column: 3 },
        { name: 'tipoAtividade', label: 'Tipo Atividade', column: 4 },
        { name: 'solicitante', label: 'Solicitante', column: 5 },
        { name: 'os', label: 'OS', column: 6 },
        { name: 'observacoes', label: 'Observações', column: 7 }
    ];

    isHovering = false;

    isJson = false;

    selectedFiles: File[] = [];

    fileSelectado: any;

    constructor(
        private datePipe: DatePipe,
        private router: Router
    ) { }

    onClose() {
        this.router.navigate(['tracker']);
    }

    toggleUploadType() {
        this.isJson = !this.isJson;
        console.log('Tipo atual:', this.isJson ? 'JSON' : 'Excel');
    }

    onDragOver(event: DragEvent) {
        event.preventDefault();
        this.isHovering = true;
    }

    onDragLeave(event: DragEvent) {
        this.isHovering = false;
    }

    onDrop(event: DragEvent) {
        event.preventDefault();
        this.isHovering = false;
        if (event.dataTransfer?.files) {
            this.handleFiles(event.dataTransfer.files);
            this.selectedFiles = Array.from(event.dataTransfer.files);

        }
    }

    onFileSelect(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files) {

            this.fileSelectado = event.target;


            this.handleFiles(input.files);
            this.selectedFiles = Array.from(input.files);
        }
    }

    handleFiles(files: FileList) {
        Array.from(files).forEach(file => {
            console.log('Arquivo selecionado:', file);
            // Aqui você pode enviar o arquivo para backend usando um service
        });
    }


    data: any;

    onVerifyFile() {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const binaryData = e.target.result;
            const workbook = XLSX.read(binaryData, { type: 'binary', dateNF: 'yyyy-mm-dd' });
            const sheetName = workbook.SheetNames[0];
            const workSheet = workbook.Sheets[sheetName];
            const selectdData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });

            this.data = selectdData.map((row: any) => {
                let miliseconds = (row[this.fields[1].column] - 1) * 24 * 60 * 60 * 1000;
                const date = new Date(1900, 0, 1);
                date.setTime(date.getTime() + miliseconds);

                var item = {
                    colaborador: row[this.fields[0].column],
                    data: this.datePipe.transform(date, 'MM/dd/yyyy'),
                    horaInicio: this.excelTimeToString(row[this.fields[2].column]),
                    horaFim: this.excelTimeToString(row[this.fields[3].column]),
                    tipoAtividade: row[this.fields[4].column],
                    solicitante: row[this.fields[5].column],
                    os: row[this.fields[6].column],
                    observacoes: row[this.fields[7].column]
                }

                return item;
            });
            console.log(this.data);
        }

        reader.readAsArrayBuffer(this.fileSelectado.files[0]);
    }

    excelTimeToString(value: number): string {
        const totalSeconds = Math.round(value * 24 * 60 * 60);

        const hours = Math.floor(totalSeconds / 3600)
            .toString()
            .padStart(2, '0');

        const minutes = Math.floor((totalSeconds % 3600) / 60)
            .toString()
            .padStart(2, '0');

        const seconds = (totalSeconds % 60).toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }
}
