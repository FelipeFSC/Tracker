import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(
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
        }
    }

    onFileSelect(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            this.handleFiles(input.files);
        }
    }

    handleFiles(files: FileList) {
        Array.from(files).forEach(file => {
            console.log('Arquivo selecionado:', file);
            // Aqui você pode enviar o arquivo para backend usando um service
        });
    }
}
