import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private sanitized: DomSanitizer) {}

  ip = this.sanitized.bypassSecurityTrustHtml(localStorage.getItem('ip'));
  city2 = this.sanitized.bypassSecurityTrustHtml(localStorage.getItem('city'));
  min = this.sanitized.bypassSecurityTrustHtml(localStorage.getItem('min'));
  max = this.sanitized.bypassSecurityTrustHtml(localStorage.getItem('max'));

  ngOnInit() {}
}
