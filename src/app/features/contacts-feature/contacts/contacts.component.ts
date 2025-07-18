import { Component } from '@angular/core';
import { Contact } from '../interfaces/contact.interface';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-contacts',
  imports: [ContactCardComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  contacts: Contact[] = [
    {
      id: '1',
      name: 'Dra. María González',
      title: 'Nutricionista Clínica',
      specialization: 'Nutrición Terapéutica',
      description:
        'Especialista en nutrición terapéutica y manejo de gastritis. 15 años de experiencia.',
      imageUrl:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=face',
      email: 'maria.gonzalez@nutriapp.com',
      phone: '+57 300 123 4567',
      buttonText: 'Agendar Cita',
      badge: {
        text: 'Nutricionista',
        colorClass: 'primary',
      },
    },
    {
      id: '2',
      name: 'Chef Carlos Mendoza',
      title: 'Chef Gastronómico Saludable',
      specialization: 'Cocina Saludable',
      description:
        'Experto en cocina saludable y adaptación de recetas para diferentes condiciones médicas.',
      imageUrl:
        'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=300&fit=crop&crop=face',
      email: 'carlos.mendoza@nutriapp.com',
      phone: '+57 300 765 4321',
      buttonText: 'Consulta Culinaria',
      badge: {
        text: 'Chef',
        colorClass: 'green',
      },
    },
    {
      id: '3',
      name: 'Dra. Ana Rodríguez',
      title: 'Psicóloga Nutricional',
      specialization: 'Psicología Alimentaria',
      description:
        'Especialista en comportamiento alimentario y apoyo emocional en cambios nutricionales.',
      imageUrl:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=face',
      email: 'ana.rodriguez@nutriapp.com',
      phone: '+57 300 987 6543',
      buttonText: 'Sesión de Apoyo',
      badge: {
        text: 'Psicóloga',
        colorClass: 'purple',
      },
    },
    {
      id: '4',
      name: 'Ing. David López',
      title: 'Soporte Técnico',
      specialization: 'Soporte Digital',
      description:
        'Especialista en soporte técnico para la app y resolución de problemas de usuarios.',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face',
      email: 'soporte@nutriapp.com',
      phone: '+57 300 555 5555',
      buttonText: 'Chat en Vivo',
      badge: {
        text: 'Soporte',
        colorClass: 'blue',
      },
    },
  ];

  onScheduleAppointment(contact: Contact): void {
    console.log('Agendando cita con:', contact.name);
    // Implementar lógica de agendamiento
  }

  onEmailClick(email: string): void {
    console.log('Contactando por email:', email);
    // Implementar lógica de email
  }

  onPhoneClick(phone: string): void {
    console.log('Llamando a:', phone);
    // Implementar lógica de llamada
  }
}
