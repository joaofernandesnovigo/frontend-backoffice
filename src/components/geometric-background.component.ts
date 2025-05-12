import { Component } from '@angular/core';

@Component({
  selector: 'app-geometric-background',
  template: `
    <div class="relative min-h-screen w-full bg-blue-50 flex items-center justify-center overflow-hidden">
      <!-- Blue lines - left side -->
      <div class="absolute left-0 top-0 h-full w-1/2 pointer-events-none">
        <div
          *ngFor="let i of lines"
          class="absolute border border-blue-500/30"
          [ngStyle]="{
            width: getSize(i),
            height: getSize(i),
            bottom: '0',
            left: '0',
            transform: 'rotate(' + i * 2 + 'deg)',
            transformOrigin: 'bottom left',
            opacity: 1 - i * 0.05
          }"
        ></div>
      </div>

      <!-- Teal lines - right side -->
      <div class="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <div
          *ngFor="let i of lines"
          class="absolute border border-teal-500/30"
          [ngStyle]="{
            width: getSize(i),
            height: getSize(i),
            bottom: '0',
            right: '0',
            transform: 'rotate(' + -i * 2 + 'deg)',
            transformOrigin: 'bottom right',
            opacity: 1 - i * 0.05
          }"
        ></div>
      </div>

      <!-- Slot (children in Angular) -->
      <div class="relative z-10">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class GeometricBackgroundComponent {
  lines = Array.from({ length: 15 }, (_, i) => i);

  getSize(i: number): string {
    return `${Math.max(30, i * 5)}%`;
  }
}
