import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet, useLocation } from 'react-router-dom';
import { NavLink as NavButton } from '@mantine/core';

export default function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  const navLinks = [
    {
        path: "/addVehicles",
        name: "Add Vehicles"
    },
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>EcoSync</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {navLinks.map((item, idx) => {
            return <NavButton color='blue' key={idx} href={item.path} label={item.name} variant="filled" active={item.path === location.pathname} />
        })}
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
 );
}