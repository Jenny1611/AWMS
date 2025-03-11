import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  private months: any[] = [];

  public getMonths() {
    return new Promise((resolve, reject) => {
      this.months = [
        { year: 2025, name: 'Marzo', length: 21 },
        { year: 2025, name: 'Aprile', length: 23 },
        { year: 2025, name: 'Maggio', length: 22 },
        { year: 2025, name: 'Giugno', length: 19 },
        { year: 2025, name: 'Luglio', length: 21 },
        { year: 2025, name: 'Agosto', length: 18 },
        { year: 2025, name: 'Settembre', length: 21 },
        { year: 2025, name: 'Ottobre', length: 23 },
        { year: 2025, name: 'Novembre', length: 22 },
        { year: 2025, name: 'Dicembre', length: 20 },
        { year: 2026, name: 'Gennaio', length: 23 },
      ];
      resolve(this.months);
    });
  }

  public getEmployees() {
    return new Promise((resolve, reject) => {
      resolve([
        { name: 'Mario Rossi', data: this.createFakeData() },
        { name: 'Luca Bianchi', data: this.createFakeData() },
        { name: 'Luigi Verdi', data: this.createFakeData() },
        { name: 'Federica Giallo', data: this.createFakeData() },
      ]);
    });
  }

  public getAWMSData() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          name: 'Mario Rossi',
          date: '17/03/2025',
          startTime: '17/03/2025 05:30:00',
          endTime: '17/03/2025 10:30:00',
          status: 'CONFERMATA',
          type: 'MALATTIA',
        },
        {
          name: 'Luigi Verdi',
          date: '18/03/2025',
          startTime: '18/03/2025 05:30:00',
          endTime: '18/03/2025 13:30:00',
          status: 'CONFERMATA',
          type: 'CIG',
        },
        {
          name: 'Luca Bianchi',
          date: '20/03/2025',
          startTime: '20/03/2025 13:30:00',
          endTime: '20/03/2025 21:30:00',
          status: 'IN ATTESA',
          type: 'PERMESSO',
        },
        {
          name: 'Mario Rossi',
          date: '19/03/2025',
          startTime: '19/03/2025 13:30:00',
          endTime: '19/03/2025 21:30:00',
          status: 'CONFERMATA',
          type: 'CIG',
        },
        {
          name: 'Luca Bianchi',
          date: '19/03/2025',
          startTime: '19/03/2025 17:30:00',
          endTime: '19/03/2025 21:30:00',
          status: 'CONFERMATA',
          type: 'CIG',
        },
        {
          name: 'Mario Rossi',
          date: '20/03/2025',
          startTime: '20/03/2025 05:30:00',
          endTime: '20/03/2025 10:30:00',
          status: 'CONFERMATA',
          type: 'CIG',
        },
      ]);
    });
  }

  createFakeData() {
    let data: any = [];
    this.months.forEach((month) => {
      let monthDays = this.months.find((m) => m.name === month.name)!.length;
      let days = Math.floor(Math.random() * monthDays);
      data.push({
        month: month.name,
        days,
        percentage: this.calcPercentage(days, monthDays),
        monthLength: month.length,
      });
    });
    return data;
  }

  calcPercentage(days: number, totDays: number) {
    let percentage: number = (days / totDays) * 100;
    if (percentage % 1 !== 0) {
      percentage = Number(((days / totDays) * 100).toFixed(2));
    }
    return percentage;
  }
}
