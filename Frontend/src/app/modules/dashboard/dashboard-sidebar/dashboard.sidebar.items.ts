export interface DashboardSidebarItem {
  link: string;
  name: string
}

export const dashboardSidebarItems: DashboardSidebarItem[] = [
  {
    link: '/dashboard/user-profile',
    name: 'User Profile'
  },
  {
    link: '/dashboard/create-post',
    name: 'Create Recipe',
  },
  {
    link: '/dashboard/favourite-posts',
    name: 'Favourite Posts',
  }
];
