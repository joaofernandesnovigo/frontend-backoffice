import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  template: `
    <div class="bg-white rounded-3xl p-8 w-full max-w-md shadow-lg">
      <div class="flex justify-center mb-5">
        <div class="flex items-center">
          <div class="text-blue-600 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
              <path d="M14 14h2" />
              <path d="M14 18h2" />
              <path d="M7 14h2" />
              <path d="M7 18h2" />
            </svg>
          </div>
          <span class="text-blue-600 text-2xl font-bold">EpicTrip</span>
        </div>
      </div>

      <h2 class="text-blue-600 text-center text-2xl font-medium mb-8">
        Welcome to our platform
      </h2>

      <form (submit)="handleLogin($event)" class="space-y-6">
        <div class="space-y-2">
          <label for="email" class="block text-gray-600">E-mail</label>
          <input
            id="email"
            type="email"
            [(ngModel)]="email"
            name="email"
            placeholder="your@email.com"
            class="w-full rounded-md border px-3 py-2"
            required
          />
        </div>

        <div class="space-y-2">
          <label for="password" class="block text-gray-600">Password</label>
          <div class="relative">
            <input
              id="password"
              [type]="showPassword ? 'text' : 'password'"
              [(ngModel)]="password"
              name="password"
              placeholder="••••••••••••••"
              class="w-full pr-10 rounded-md border px-3 py-2"
              required
            />
            <button
              type="button"
              (click)="togglePasswordVisibility()"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <svg *ngIf="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13.875 18.825A10.974 10.974 0 0112 20c-5.05 0-9.29-3.36-10.66-8a10.967 10.967 0 011.731-3.185M6.81 6.81A10.944 10.944 0 0112 4c5.05 0 9.29 3.36 10.66 8a10.965 10.965 0 01-2.145 3.455M15 12a3 3 0 11-3-3m0 0l-6-6" />
              </svg>
              <svg *ngIf="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.94 17.94A10.96 10.96 0 0112 20c-5.05 0-9.29-3.36-10.66-8a10.96 10.96 0 012.6-4.43m4.36-2.34A10.94 10.94 0 0112 4c5.05 0 9.29 3.36 10.66 8a10.96 10.96 0 01-1.64 3.16M15 12a3 3 0 01-3 3m0 0a3 3 0 010-6m0 6l6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div class="text-center">
          <button type="button" class="text-blue-600 hover:underline text-sm">
            Forgot password
          </button>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          Login
        </button>

        <div class="text-center mt-6">
          <button type="button" class="text-blue-600 hover:underline text-sm">
            Create account
          </button>
        </div>
      </form>
    </div>
  `
})
export class LoginFormComponent {
  email = '';
  password = '';
  showPassword = false;

  handleLogin(event: Event) {
    event.preventDefault();
    console.log('Login attempted with:', { email: this.email, password: this.password });
    // Lógica real de login pode ser implementada aqui
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
