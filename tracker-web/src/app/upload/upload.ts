import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-upload',
    standalone: false,
    templateUrl: './upload.html',
    styleUrl: './upload.css'
})
export class Upload {

    @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

    columns = [
        { key: 'status', label: 'Status' },
        { key: 'colaborador', label: 'Colaborador' },
        { key: 'date', label: 'Data' },
    ];

    expandedColumns = [
        { key: 'horaInicio', label: 'H. inicio' },
        { key: 'horaFim', label: 'H. Término' },
        { key: 'tipoAtividade', label: 'Tipo atividade' },
        { key: 'solicitante', label: 'Solicitante' },
        { key: 'os', label: 'OS' },
        { key: 'observacoes', label: 'Observações' },
    ];

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

    linhasInicio = 2;
    linhasFim = 89;

    isHovering = false;

    isJson = false;

    selectedFiles: File | null = null;
    fileSelectado: any = null;

    dataSource: any[] = [];

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
            this.fileSelectado = event.target;

            this.selectedFiles = event.dataTransfer.files[0];

        }
    }

    onFileSelect(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            this.fileSelectado = event.target;

            this.selectedFiles = input.files[0];
        }
    }

    deleteFile() {
        this.selectedFiles = null;
        this.fileSelectado = null;
        this.fileInput.nativeElement.value = '';
    }

    onVerifyFile() {
        if (this.isJson) {
            this.verifyJsonFile();
        } else {
            this.verifyExcelFile();
        }
    }

    verifyJsonFile() {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const jsonData = JSON.parse(e.target.result);

            let listJson = [];
            for (let item of jsonData) {
                if (item.mc1 != null &&
                    item.mc1 != "FOLGA" &&
                    item.mc1 != "FERIADO") {

                    const [year, month, day] = item.data.split("-");
                    let date = `${day}/${month}/${year}`;
                    let data1 = {
                        date: date,
                        horaInicio: String(item.mc1).replace(/e/g, ''),
                        horaFim: "10:00",
                    };
                    let data2 = {
                        date: date,
                        horaInicio: "10:00",
                        horaFim: "",
                    };
                    let data3 = {
                        date: date,
                        horaInicio: "",
                        horaFim: String(item.mc2).replace(/e/g, ''),
                    };
                    let data4 = {
                        date: date,
                        horaInicio: String(item.mc3).replace(/e/g, ''),
                        horaFim: String(item.mc4).replace(/e/g, ''),
                    };
                    listJson.push(data1);
                    listJson.push(data2);
                    listJson.push(data3);
                    listJson.push(data4);
                }
            }

            let list: any[] = [];
            let tasks: any[] = [];

            let oldItem: any = null;
            for (let item of listJson) {
                let itemTratado = {
                    status: 'error',
                    colaborador: "NOME_SESSAO",
                    date: item.date,
                    horaInicio: item.horaInicio,
                    horaFim: item.horaFim,
                    tipoAtividade: "",
                    solicitante: "",
                    os: "",
                    observacoes: ""
                }
                if (oldItem != null && oldItem.date !== item.date) {
                    list.push({
                        id: oldItem.date,
                        code: oldItem.date,
                        colaborador: "NOME_SESSAO",
                        date: oldItem.date,
                        status: 'error',
                        tasks: tasks,
                        options: [{ icon: 'delete', label: 'Excluir' }]
                    });
                    tasks = [];
                }
                tasks.push(itemTratado);
                oldItem = item;
            }
            list.push({
                id: oldItem.date,
                code: oldItem.date,
                colaborador: "NOME_SESSAO",
                date: oldItem.date,
                status: 'error',
                tasks: tasks,
                options: [{ icon: 'delete', label: 'Excluir' }]
            });
            this.dataSource = list;
        }

        reader.readAsText(this.fileSelectado.files[0]);
    }

    verifyExcelFile() {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const binaryData = e.target.result;
            const workbook = XLSX.read(binaryData, { type: 'binary', dateNF: 'yyyy-mm-dd' });
            const sheetName = workbook.SheetNames[0];
            const workSheet = workbook.Sheets[sheetName];
            const selectdData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });

            let list: any[] = [];
            let tasks: any[] = [];

            let oldItem: any = null;
            for (let i = this.linhasInicio - 1; i < this.linhasFim; i++) {
                let row: any = selectdData[i];
                if (row) {
                    let miliseconds = (row[this.fields[1].column] - 2) * 24 * 60 * 60 * 1000;
                    const date = new Date(1900, 0, 1);
                    date.setTime(date.getTime() + miliseconds);

                    let item = {
                        colaborador: row[this.fields[0].column],
                        date: this.datePipe.transform(date, 'dd/MM/yyyy'),
                        horaInicio: this.excelTimeToString(row[this.fields[2].column]),
                        horaFim: this.excelTimeToString(row[this.fields[3].column]),
                        tipoAtividade: row[this.fields[4].column],
                        solicitante: row[this.fields[5].column],
                        os: row[this.fields[6].column],
                        observacoes: row[this.fields[7].column]
                    }
                    console.log(item);
                    let itemTratado = {
                        status: 'success',
                        colaborador: item.colaborador,
                        date: item.date,
                        horaInicio: item.horaInicio,
                        horaFim: item.horaFim,
                        tipoAtividade: item.tipoAtividade,
                        solicitante: item.solicitante,
                        os: item.os,
                        observacoes: item.observacoes
                    }

                    if (oldItem != null && oldItem.date !== item.date) {
                        list.push({
                            id: oldItem.date,
                            code: oldItem.date,
                            colaborador: oldItem.colaborador,
                            date: oldItem.date,
                            status: 'success',
                            tasks: tasks,
                            options: [{ icon: 'delete', label: 'Excluir' }]
                        });
                        tasks = [];
                    }

                    tasks.push(itemTratado);

                    oldItem = item;
                }
            }
            list.push({
                id: 0,
                code: oldItem.date,
                colaborador: oldItem.colaborador,
                date: oldItem.date,
                status: 'success',
                tasks: tasks,
                options: [{ icon: 'delete', label: 'Excluir' }]
            });

            this.dataSource = list;
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

    handleTableAction(event: { label: string; row: any }) {
        switch (event.label) {
            case 'Editar':
                console.log('EDITAR ' + event.row.id);
                //this.onEdit(event.row.id);
                break;
            case 'Excluir':
                console.log('DELETAR ' + event.row.code);
                //this.onDelete(event.row.code);
                break;
            default:
                console.warn('Ação não reconhecida:', event.label);
        }
    }
}
