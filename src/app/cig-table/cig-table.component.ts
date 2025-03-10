import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cig-table',
  templateUrl: './cig-table.component.html',
  styleUrls: ['./cig-table.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CigTableComponent implements OnInit {
  public months: any[] = [];
  public employees: any[] = [];
  private totalWorkingDays: number = 0;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getMonths().then((months: any) => {
      this.months = months
    })
    this.api.getEmployees().then((employees: any) => {
      this.employees = employees;
    })
    this.months.forEach((m) => {
      this.totalWorkingDays += m.length;
    });
  }

  calcPercentage(days: number, totDays: number) {
    let percentage: number = (days / totDays) * 100;
    if (percentage % 1 !== 0) {
      percentage = Number(((days / totDays) * 100).toFixed(2));
    }
    return percentage;
  }

  calculateTotals(index: number, data?: any) {
    const employee = this.employees[index];
    let totalDays = 0;totalDays

    employee.data.forEach((data: any) => {
      totalDays += data.days;
    });

    let totalPercentage: number = (totalDays / this.totalWorkingDays) * 100;
    
    if (totalPercentage % 1 !== 0) {
      totalPercentage = Number(
        ((totalDays / this.totalWorkingDays) * 100).toFixed(2)
      );
    }

    if(data) {
      let days = data.days;
      let monthLength = this.months.find((m) => m.name === data.month)!.length;
      data.percentage = this.calcPercentage(days, monthLength);
    }

    return { totalDays, totalPercentage };
  }
}
