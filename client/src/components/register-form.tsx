import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

const RegisterForm = () => {
  return (
    <form className="space-y-6 pt-4">
      <fieldset className="space-y-3.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="name">Full Name</Label>
          {/* <span className="text-sm text-red-500">this is a error message</span> */}
        </div>
        <Input type="text" id="name" placeholder="John Doe" />
      </fieldset>
      <fieldset className="space-y-3.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="email">Email Address</Label>
          {/* <span className="text-sm text-red-500">this is a error message</span> */}
        </div>
        <Input type="text" id="email" placeholder="john@example.com" />
      </fieldset>
      <fieldset className="space-y-3.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          {/* <span className="text-sm text-red-500">this is a error message</span> */}
        </div>
        <Input type="password" id="password" placeholder="Strong password" />
      </fieldset>
      <fieldset className="space-y-3.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password2">Reenter Password</Label>
          {/* <span className="text-sm text-red-500">this is a error message</span> */}
        </div>
        <Input
          type="password"
          id="password2"
          placeholder="Repeat the password"
        />
      </fieldset>
      <fieldset className="space-y-3.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="role">Account Type</Label>
          {/* <span className="text-sm text-red-500">this is a error message</span> */}
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Account Type" />
          </SelectTrigger>
          <SelectContent id="role">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </fieldset>
      <Button type="submit">
        <span>Register</span>
        <IoIosArrowRoundForward className="text-2xl" />
      </Button>
    </form>
  );
};

export default RegisterForm;
