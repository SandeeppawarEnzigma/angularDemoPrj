import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  getUserInfo(name: string, lastName: string) {
    alert('user is : ' + name + ' ' + lastName);
  }

  calculate() {
   // const num1: number = prompt('Enter the first number:');
    const input1: string | null = prompt('Enter the first number:');
const num1: number = input1 !== null ? parseFloat(input1) : NaN;
const input2: string | null = prompt('Enter the second number:');
const num2: number = input2 !== null ? parseFloat(input2) : NaN;
    const operation = prompt('Enter the operation (add, subtract, multiply, divide):');
    if (operation == 'add') {
      alert(num1 + num2);
    } else if (operation == 'sub') {
      alert(num1 - num2);
    } else if (operation == 'mul') {
      alert(num1 * num2);
    } else if (operation == 'div') {
      alert(num1 / num2);
    } else {
      alert('invalid operation');
    }
  }

  printValue(value: any) {
    console.log(value)

  }
}
