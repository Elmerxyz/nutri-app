import { Component, EventEmitter, Output, input, output } from '@angular/core';
import {
  Contact,
  ContactColorConfig,
  ContactColorScheme,
} from '../interfaces/contact.interface';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss',
})
export class ContactCardComponent {
  readonly contact = input.required<Contact>();
  onScheduleAppointment = output<Contact>();
  onEmailClick = output<string>();
  onPhoneClick = output<string>();

  private colorConfigs: Record<ContactColorScheme, ContactColorConfig> = {
    primary: {
      badgeClass: 'bg-primary-500',
      titleClass: 'text-primary-600',
      iconBgClass: 'bg-primary-100',
      iconClass: 'text-primary-600',
      hoverClass: 'hover:text-primary-600',
      buttonClass: 'bg-primary-500',
      buttonHoverClass: 'hover:bg-primary-600',
    },
    green: {
      badgeClass: 'bg-green-500',
      titleClass: 'text-green-600',
      iconBgClass: 'bg-green-100',
      iconClass: 'text-green-600',
      hoverClass: 'hover:text-green-600',
      buttonClass: 'bg-green-500',
      buttonHoverClass: 'hover:bg-green-600',
    },
    purple: {
      badgeClass: 'bg-purple-500',
      titleClass: 'text-purple-600',
      iconBgClass: 'bg-purple-100',
      iconClass: 'text-purple-600',
      hoverClass: 'hover:text-purple-600',
      buttonClass: 'bg-purple-500',
      buttonHoverClass: 'hover:bg-purple-600',
    },
    blue: {
      badgeClass: 'bg-blue-500',
      titleClass: 'text-blue-600',
      iconBgClass: 'bg-blue-100',
      iconClass: 'text-blue-600',
      hoverClass: 'hover:text-blue-600',
      buttonClass: 'bg-blue-500',
      buttonHoverClass: 'hover:bg-blue-600',
    },
    orange: {
      badgeClass: 'bg-orange-500',
      titleClass: 'text-orange-600',
      iconBgClass: 'bg-orange-100',
      iconClass: 'text-orange-600',
      hoverClass: 'hover:text-orange-600',
      buttonClass: 'bg-orange-500',
      buttonHoverClass: 'hover:bg-orange-600',
    },
    red: {
      badgeClass: 'bg-red-500',
      titleClass: 'text-red-600',
      iconBgClass: 'bg-red-100',
      iconClass: 'text-red-600',
      hoverClass: 'hover:text-red-600',
      buttonClass: 'bg-red-500',
      buttonHoverClass: 'hover:bg-red-600',
    },
  };

  get colorConfig(): ContactColorConfig {
    return this.colorConfigs[this.contact().badge.colorClass];
  }

  onScheduleClick(): void {
    this.onScheduleAppointment.emit(this.contact());
  }

  onEmailLinkClick(): void {
    this.onEmailClick.emit(this.contact().email);
  }

  onPhoneLinkClick(): void {
    this.onPhoneClick.emit(this.contact().phone);
  }
}
