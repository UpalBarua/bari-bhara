import axios from '@/api/axios';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { auth } from '@/firebase/firebase.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa6';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { toast } from 'sonner';
import { z } from 'zod';

const userRoles = ['owner', 'renter'] as const;

const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required' })
      .max(30, { message: 'Name cannot exceed 30 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    role: z.enum(userRoles).or(z.literal('')),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type RegisterForm = z.infer<typeof registerFormSchema>;

const RegisterForm = () => {
  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
  });

  const { mutate: createNewUser, isPending } = useMutation({
    mutationFn: async ({ name, email, password, role }: RegisterForm) => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await axios.post('/users', {
          name,
          email,
          role,
          imgUrl: `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${name}`,
        });
        toast.success('Successfully created new account');
      } catch (error) {
        if (error instanceof Error) {
          return toast.error(error.message);
        }

        toast.error('Something went wrong');
      }
    },
  });

  return (
    <Form {...form}>
      <form
        className="space-y-4 pt-4"
        onSubmit={form.handleSubmit((data) => createNewUser(data))}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Strong password"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Repeat your password"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a user role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {userRoles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-3">
          <Button type="submit" disabled={isPending}>
            <span>Register</span>
            {isPending ? (
              <FaSpinner className="text-2xl animate-spin" />
            ) : (
              <IoIosArrowRoundForward className="text-2xl text-primary-50" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
