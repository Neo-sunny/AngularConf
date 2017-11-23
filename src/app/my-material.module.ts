import { NgModule } from '@angular/core';

import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, 
    MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, 
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, 
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, 
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, 
    MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

    const MAT_MODULES  = [
        MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, 
        MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
        MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, 
        MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
        MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, 
        MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, 
        MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, 
        MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
      ];    

      @NgModule({
        imports: MAT_MODULES,
        exports: MAT_MODULES,
        declarations: []
      })
      export class MyMaterialModule { }