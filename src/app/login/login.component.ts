import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  username: string | undefined;
  password: string | undefined;

  onSubmit() {
    // Aqui você pode tratar os dados do formulário, por exemplo, enviar para um serviço de autenticação
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

}
