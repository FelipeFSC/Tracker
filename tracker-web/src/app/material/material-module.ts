import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@NgModule({
    imports: [
        CommonModule,
        MatTabsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatListModule,
        MatSnackBarModule,
        DragDropModule,
        MatBadgeModule,
        MatTableModule,
        MatPaginatorModule,
        MatRadioModule,
        MatChipsModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatTreeModule,
        FormsModule,
        MatSlideToggle
    ],
    declarations: [],
    exports: [
        MatTabsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatListModule,
        MatSnackBarModule,
        DragDropModule,
        MatBadgeModule,
        MatTableModule,
        MatPaginatorModule,
        MatRadioModule,
        MatChipsModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatTreeModule,
        FormsModule,
        MatSlideToggle
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                display: {
                    dateInput: 'DD/MM/YYYY',
                    monthYearLabel: 'MMM YYYY',
                    monthYearA11yLabel: 'MM YYYY',
                    yearA11yLabel: 'YYYY'
                },
                parse: {
                    dateInput: 'DD/MM/YYYY',
                }
            }
        }
    ]
})
export class MaterialModule { }
