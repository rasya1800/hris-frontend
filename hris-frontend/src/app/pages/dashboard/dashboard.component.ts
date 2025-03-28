
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  topCards = [
    {
      title: 'Total Employees',
      value: 678,
      subtitle: '+14% from last month',
      icon: 'bi-people-fill',
      type: 'default'
    },
    {
      title: 'Payroll Progress',
      value: '75%',
      subtitle: '25% pending',
      icon: 'bi-cash-stack',
      type: 'progress',
      progress: 75
    },
    {
      title: 'Upcoming Leaves',
      value: 12,
      subtitle: 'this week',
      icon: 'bi-calendar-event',
      type: 'default'
    },
    {
      title: 'Attendance Summary',
      value: '',
      subtitle: '',
      icon: 'bi-clock-history',
      type: 'attendance',
      attendanceData: {
        present: 120,
        late: 8,
        absent: 3
      }
    }
  ];
}