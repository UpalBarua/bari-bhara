import LoginForm from '@/components/login-form';
import RegisterForm from '@/components/register-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useMediaQuery from '@/hooks/use-media-query';
import Link from 'next/link';
import { FaMapSigns } from 'react-icons/fa';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaReddit,
} from 'react-icons/fa';

const socialMediaLinks = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/',
    Icon: <FaLinkedin />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    Icon: <FaInstagram />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    Icon: <FaFacebook />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/',
    Icon: <FaTwitter />,
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/',
    Icon: <FaReddit />,
  },
] as const;

const AuthPage = () => {
  const isSmPlus = useMediaQuery('(min-width: 640px)');

  return (
    <main className="max-w-4xl rounded-md sm:grid sm:grid-cols-2 mx-auto gap-4 py-6 sm:py-8">
      <section className="space-y-3 sm:space-y-3.5">
        <div className="flex items-center gap-x-2.5">
          <FaMapSigns className="text-3xl text-accent-600" />
          <span className="text-2xl font-medium tracking-tight">BariBhara</span>
        </div>
        <h2 className="text-lg max-w-[95%] pb-3 sm:max-w-[80%]">
          Welcome! Get started by creating an account or logging in.
        </h2>
        <Tabs
          defaultValue="sign-in"
          className="bg-white dark:bg-primary-950 p-3 sm:p-5 rounded-md border border-primary-50/50 dark:border-primary-800 shadow">
          <TabsList className="w-full bg-accent-100 border border-primary-50/50 dark:border-primary-800">
            <TabsTrigger value="sign-in" className="w-full rounded-md">
              Register
            </TabsTrigger>
            <TabsTrigger value="sign-up" className="w-full rounded-md">
              Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in" className="focus-visible:ring-0">
            <RegisterForm />
          </TabsContent>
          <TabsContent value="sign-up" className="focus-visible:ring-0">
            <LoginForm />
          </TabsContent>
        </Tabs>
      </section>
      {isSmPlus && (
        <section className="bg-cover bg-top rounded-md border dark:border-primary-800 border-primary-200/50 shadow bg-accent-600/25 px-5 py-24 before:absolute before:bg-accent-800/70 before:h-full before:w-full relative before:inset-0 before:rounded-md bg-[url('/images/auth-img.jpg')]">
          <div className="relative z-10 space-y-2">
            <p className="font-bold tracking-tight text-4xl text-white">
              Explore, Rent, Thrive: Your Seamless Journey to Ideal Spaces
              Begins Here!
            </p>
            <p className="text-lg">Follow us on our social medias</p>
            <div className="flex items-center gap-x-4 pt-2">
              {socialMediaLinks.map(({ Icon, link, name }) => (
                <Link href={link} key={link}>
                  <span className="text-3xl hover:text-white transition-colors">
                    {Icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default AuthPage;
