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
import { auth } from '@/firebase/firebase.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { toast } from 'sonner';
import { z } from 'zod';

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Not a valid email' }),
  password: z.string(),
});

type LoginForm = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: async ({ email, password }: LoginForm) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Successfully logged in to your account');
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
        onSubmit={form.handleSubmit((data) => loginUser(data))}>
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
                <Input placeholder="Your password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-3">
          <Button type="submit">
            <span>Login</span>
            <IoIosArrowRoundForward className="text-2xl text-primary-50" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
