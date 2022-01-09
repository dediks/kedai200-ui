import TopNavbar from '../../components/TopNavbar';
import menus from './menus';

export default function Home() {
  const menuItems = menus.map((menu) => (
    <li key={menu.id}>
      <div>
        <img src={menu.icon} alt={menu.label} />
        {menu.label}
      </div>
    </li>
  ));

  return (
    <div className="w-full">
      <TopNavbar title="Dashboard" />
      <div className="w-full flex">
        <div className="w-20 h-screen bg-red-400 p-4">
          <ul className="flex flex-col space-y-4 text-md text-center items-center">
            {menuItems}
          </ul>
        </div>
        <div className="w-full bg-blue-900 h-screen">Ini daashboard</div>
      </div>
    </div>
  );
}
