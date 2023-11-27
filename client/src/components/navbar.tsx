import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { FaHome, FaMapSigns } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import { IoMenuSharp } from 'react-icons/io5';
import { MdFamilyRestroom } from 'react-icons/md';
import useMediaQuery from '@/hooks/use-media-query';

const navOptions = [
  {
    title: 'Home',
    href: '/',
    Icon: <FaHome />,
  },
  {
    title: 'Family',
    href: '/family',
    Icon: <MdFamilyRestroom />,
  },
  {
    title: 'Bachelor',
    href: '/bachelor',
    Icon: <FaPerson />,
  },
  {
    title: 'Notifications',
    href: '/notifications',
    Icon: <IoMdNotifications />,
  },
] as const;

const Navbar = () => {
  const isSm = useMediaQuery('(min-width: 640px)');

  return (
    <header className="flex items-center gap-x-2 py-2 sticky top-0 justify-between bg-[#E4F3FF]">
      <div className="flex items-center gap-x-4">
        <Link className="flex items-center gap-x-2.5" href="/">
          <FaMapSigns className="text-2xl text-accent-600" />
          <span className="text-xl font-medium tracking-tight hidden sm:block">
            BariBhara
          </span>
        </Link>
        <form className="relative">
          <BsSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
          <Input className="pl-10 w-full" type="text" placeholder="Search" />
        </form>
      </div>
      {isSm && (
        <>
          <nav className="flex items-center gap-x-6">
            {navOptions.map(({ title, href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-x-2 ">
                <span className="text-2xl text-primary-600">{Icon}</span>
                <p>{title}</p>
              </Link>
            ))}
          </nav>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="sm">
            <IoMenuSharp className="text-2xl" />
          </Button>
        </>
      )}
    </header>
  );
};

export default Navbar;
