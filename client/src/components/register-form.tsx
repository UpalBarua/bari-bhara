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
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const RegisterForm = () => {
  const registerFormSchema = z
    .object({
      name: z
        .string()
        .min(1, { message: 'Name is missing' })
        .max(30, { message: 'Name is more than 30 characters' }),
      email: z.string().email({ message: 'Not a valid email' }),
      password: z
        .string()
        .min(6, { message: 'Password must be more than 6 characters' }),
      password2: z.string(),
    })
    .refine(({ password, password2 }) => password === password2, {
      message: 'Passwords do not match',
      path: ['password2'],
    });

  type RegisterForm = z.infer<typeof registerFormSchema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = (data: RegisterForm) => {};

  return (
    <form className="space-y-6 pt-4" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-3.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="name">Full Name</Label>
          {/* <span className="text-sm text-red-500">this is a error message</span> */}
        </div>
        <Input
          type="text"
          id="name"
          placeholder="John Doe"
          {...register('name')}
        />
      </fieldset>
      <fieldset className="space-y-3.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="email">Email Address</Label>
          {/* <span className="text-sm text-red-500">this is a error message</span> */}
        </div>
        <Input
          type="text"
          id="email"
          placeholder="john@example.com"
          {...register('email')}
        />
      </fieldset>
      <fieldset className="space-y-3.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          {/* <span className="text-sm text-red-500">this is a error message</span> */}
        </div>
        <Input
          type="password"
          id="password"
          placeholder="Strong password"
          {...register('password')}
        />
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
          {...register('password2')}
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
