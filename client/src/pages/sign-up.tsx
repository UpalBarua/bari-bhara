import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IoIosArrowRoundForward } from 'react-icons/io';
import useMediaQuery from '@/hooks/use-media-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaMapSigns } from 'react-icons/fa';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RegisterForm from '@/components/register-form';
import LoginForm from '@/components/login-form';

const SignUp = () => {
  // const isScreenMd = useMediaQuery('(min-width: 768px)');

  // const formSchema = z.object({
  //   name: z.string(),
  //   email: z.string(),
  //   password: z.string(),
  //   password2: z.string(),
  // });

  // type SignUpForm = z.infer<typeof formSchema>;

  // const { register } = useForm<SignUpForm>({
  //   resolver: zodResolver(formSchema),
  // });

  return (
    <main className="max-w-4xl rounded-md sm:grid sm:grid-cols-2 mx-auto gap-4 py-6 sm:py-8">
      <section className="space-y-3">
        <div className="flex items-center gap-x-2.5">
          <FaMapSigns className="text-3xl text-accent-600" />
          <span className="text-2xl font-medium tracking-tight">BariBhara</span>
        </div>
        <h2 className="text-lg max-w-[95%] pb-3 sm:max-w-[80%]">
          Welcome! Get started by creating an account or logging in.
        </h2>
        <Tabs
          defaultValue="sign-in"
          className="bg-white p-3 sm:p-5 rounded-md border border-primary-200/50 shadow">
          <TabsList className="w-full bg-accent-100 h-auto p-1.5">
            <TabsTrigger
              value="sign-in"
              className="w-full text-base rounded-md">
              Register
            </TabsTrigger>
            <TabsTrigger
              value="sign-up"
              className="w-full text-base rounded-md">
              Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <RegisterForm />
          </TabsContent>
          <TabsContent value="sign-up">
            <LoginForm />
          </TabsContent>
        </Tabs>
      </section>
      <section className="bg-cover bg-top rounded-md border border-primary-200/50 shadow bg-accent-600/25 px-5 py-20 before:absolute before:bg-accent-800/70 before:h-full before:w-full relative before:inset-0 before:rounded-md bg-[url('/images/auth-img.jpg')]">
        <p className="font-bold tracking-tight text-4xl text-white z-10 relative">
          Explore, Rent, Thrive: Your Seamless Journey to Ideal Spaces Begins
          Here!
        </p>
      </section>
    </main>
  );
};

export default SignUp;
