import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginForm = () => {
  return (
    <form className="space-y-4">
      <fieldset className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="email">Email Address</Label>
          <span className="text-sm text-red-500">this is a error message</span>
        </div>
        <Input type="text" id="email"></Input>
      </fieldset>
      <fieldset className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <span className="text-sm text-red-500">this is a error message</span>
        </div>
        <Input type="password" id="password"></Input>
      </fieldset>
      <Button>
        <span>Login</span>
        <IoIosArrowRoundForward className="text-2xl" />
      </Button>
    </form>
  );
};

export default LoginForm;
