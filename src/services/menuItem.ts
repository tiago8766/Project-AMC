export interface MenuItem{
  id: number;
  titulo: string;
  link: string;
}
export const NavbarMenu: MenuItem[]= [
    { id: 1, titulo: 'Inicio', link: '/' },
    { id: 2, titulo: 'Actividades', link: '#'},
    { id: 3, titulo: 'Recursos', link: '#' },
    { id: 4, titulo: 'Tips', link: '#' },
  ];
