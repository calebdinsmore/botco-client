import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { FormsModule } from '@angular/forms';
import { InitialsPipe } from '../core/pipes/initials.pipe';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from 'primeng/spinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [InitialsPipe],
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    FlexLayoutModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DragDropModule,
    ToastModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    TooltipModule,
    DropdownModule,
    SpinnerModule,
    ScrollPanelModule,
    DialogModule,
    CheckboxModule,
    TabViewModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    FlexLayoutModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DragDropModule,
    InitialsPipe,
    ToastModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    TooltipModule,
    DropdownModule,
    SpinnerModule,
    ScrollPanelModule,
    DialogModule,
    CheckboxModule,
    TabViewModule,
  ],
  providers: [InitialsPipe, MessageService, ConfirmationService],
})
export class SharedModule {}
