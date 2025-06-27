import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    /*
    dataSource: any = [
        {
            id: 1,
            colaborador: "Joao Silva",
            data: "2025-06-20",
            horario_inicio: "08:00",
            horario_termino: "12:00",
            tipo_atividade: "Manutencao Preventiva",
            solicitante: "Carlos Mendes",
            os: "OS12345",
            observacoes: "Equipamento funcionando normalmente apos manutencao."
        },
        {
            id: 2,
            colaborador: "Maria Oliveira",
            data: "2025-06-21",
            horario_inicio: "13:00",
            horario_termino: "17:00",
            tipo_atividade: "Reparo",
            solicitante: "Ana Souza",
            os: "OS12346",
            observacoes: "Troca de componente danificado."
        },
        {
            id: 3,
            colaborador: "Maria Oliveira",
            data: "2025-06-21",
            horario_inicio: "13:00",
            horario_termino: "17:00",
            tipo_atividade: "Reparo",
            solicitante: "Ana Souza",
            os: "OS12346",
            observacoes: "Troca de componente danificado."
        },
        // Adicione mais registros se desejar
    ];

    expandedElement: any | null = null;

    toggleRow(element: any) {
        this.expandedElement = this.expandedElement === element ? null : element;
    }
    */

    columns = [
  { key: 'name', label: 'Nome' },
  { key: 'email', label: 'Email' }
];

rows = [
  {
    id: 1,
    name: 'João',
    email: 'joao@email.com',
    details: [
      { label: 'Projeto', value: 'Angular Migration' },
      { label: 'Status', value: 'Em progresso' }
    ]
  },
  {
    id: 2,
    name: 'Maria',
    email: 'maria@email.com',
    details: [
      { label: 'Projeto', value: 'Design System' },
      { label: 'Status', value: 'Finalizado' }
    ]
  }
];


}
