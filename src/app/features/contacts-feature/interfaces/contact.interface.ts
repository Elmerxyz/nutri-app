export interface Contact {
  id: string;
  name: string;
  title: string;
  specialization: string;
  description: string;
  imageUrl: string;
  email: string;
  phone: string;
  buttonText: string;
  badge: {
    text: string;
    colorClass: ContactColorScheme;
  };
}

export type ContactColorScheme = 
  | 'primary' 
  | 'green' 
  | 'purple' 
  | 'blue' 
  | 'orange' 
  | 'red';

export interface ContactColorConfig {
  badgeClass: string;
  titleClass: string;
  iconBgClass: string;
  iconClass: string;
  hoverClass: string;
  buttonClass: string;
  buttonHoverClass: string;
}