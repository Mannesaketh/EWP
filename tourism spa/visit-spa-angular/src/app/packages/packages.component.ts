import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageService } from '../services/package.service';
import { SpaPackage } from '../models/package';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html'
})
export class PackagesComponent {
  packages: SpaPackage[] = [];
  message: string = 'Choose a journey and load live details from our travel desk.';

  constructor(private packageService: PackageService) {}

  loadData(): void {
    this.message = 'Loading India wellness journeys...';
    this.packageService.getPackages().subscribe({
      next: (data: SpaPackage[]) => {
        this.packages = data;
        this.message = `Showing ${data.length} curated India wellness journeys.`;
      },
      error: () => {
        this.packages = [];
        this.message = 'The travel desk is unavailable. Please try again or contact our team.';
      }
    });
  }
}
