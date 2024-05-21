export interface MenuItem {
  title: string;
  link: string;
}

export const NavbarMenuItems: MenuItem[] = [
  {
    title: "Posts",
    link: "/posts",
  },
  {
    title: "Dashboard",
    link: "/dashboard"
  }
]
