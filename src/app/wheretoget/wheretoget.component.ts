import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-wheretoget',
  templateUrl: './wheretoget.component.html',
  styleUrls: ['./wheretoget.component.css']
})
export class WheretogetComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialog.closeAll();
  }

}
