import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IoIosArrowRoundForward } from 'react-icons/io';
import useMediaQuery from '@/hooks/use-media-query';

const SignUp = () => {
  const isScreenMd = useMediaQuery('(min-width: 768px)');

  return (
    <main className="max-w-5xl bg-white rounded-md border border-primary-200 shadow grid md:grid-cols-2 p-3.5 mx-auto">
      <section className="space-y-2">
        <h2 className="text-xl font-medium tracking-tight">
          Create an account
        </h2>
        <p className="text-primary-900/70">
          Or if you already have an account{' '}
          <Link className="text-accent-600" href="/sign-in">
            Sign In
          </Link>{' '}
          to your account and continue.
        </p>
        <form className="space-y-4">
          <fieldset className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="name">Full Name</Label>
              <span className="text-sm text-red-500">
                this is a error message
              </span>
            </div>
            <Input type="text" id="name"></Input>
          </fieldset>
          <fieldset className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="email">Email Address</Label>
              <span className="text-sm text-red-500">
                this is a error message
              </span>
            </div>
            <Input type="text" id="email"></Input>
          </fieldset>
          <fieldset className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <span className="text-sm text-red-500">
                this is a error message
              </span>
            </div>
            <Input type="password" id="password"></Input>
          </fieldset>
          <fieldset className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="password2">Reenter Password</Label>
              <span className="text-sm text-red-500">
                this is a error message
              </span>
            </div>
            <Input type="password" id="password2"></Input>
          </fieldset>
          <Button>
            <span>Create account</span>
            <IoIosArrowRoundForward className="text-2xl" />
          </Button>
        </form>
      </section>
      {isScreenMd && (
        <section
          className="bg-cover bg-top"
          style={{
            backgroundImage: "url('/auth-banner.jpg')",
          }}></section>
      )}
    </main>
  );
};

export default SignUp;
