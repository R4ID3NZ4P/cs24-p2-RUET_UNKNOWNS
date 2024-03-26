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
    {
        path: "/createSTS",
        name: "Create STS"
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
        <div className='text-3xl font-bold text-center lg:text-left lg:ml-6 lg:pt-2 text-blue-600'><span className='text-green-500'>Eco</span>Sync</div>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        
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