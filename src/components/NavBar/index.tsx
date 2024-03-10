'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/NavBar/Logo';
import NavIcon from '@/components/NavBar/NavIcon';
import NAVBAR_ITEMS from '@/constants/navbar';

type Item = {
  key: string;
  name: string;
  icon: string;
  path: string;
};

// TODO: fix pixel to pixel padding size etc; add notification icon

export default function NavBar() {
  const pathname = usePathname();

  const renderNavItem = (item: Item) => {
    const isActive = pathname === item.path;
    return (
      <Link href={item.path} className="flex flex-col items-center">
        <NavIcon isActive={isActive} />
        <span>{isActive && item.name}</span>
      </Link>
    );
  };

  return (
    <nav className="max-w-xs bg-[#1B1B1B]">
      <div className="p-5 min-h-[52px]">
        <Logo />
      </div>
      {NAVBAR_ITEMS.map((item) => (
        <div key={item.key} className="p-5 min-h-[90px]">
          {renderNavItem(item)}
        </div>
      ))}
    </nav>
  );
}
