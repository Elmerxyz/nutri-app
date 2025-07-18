export interface MenuNode {
  key: string;
  label: string;
  icon?: string;
  routerLink?: string;
  children?: MenuNode[];
  isNode?: boolean;
}
export const MENU_OPTIONS: MenuNode[] = [
  {
    key: 'home',
    label: 'Inicio',
    icon: 'pi pi-cart-minus',
    routerLink: '/home',
  }, 
  {
    key: 'contacts',
    label: 'Contactos',
    icon: 'pi pi-address-book',
    routerLink: '/contacts',
  }, 
  {
    key: 'my-recipes',
    label: 'Mis recetas',
    icon: 'pi pi-receipt',
    routerLink: '/my-recipes',
  }, 
  {
    key: 'recomendations',
    label: 'Recomendaciones',
    icon: 'pi pi-file-check',
    routerLink: '/recomendations',
  }, 

];
