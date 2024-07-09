'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import GoogleSignInButton from '../github-auth-button';
import Link from 'next/link';

const phoneRegex = /^[0-9]{10,15}$/;
const formSchema = z.object({
  no_telp: z.string()
    .refine((val) => phoneRegex.test(val), {
      message: 'Masukan nomor telepon yang benar',
    }),
    password: z.string()
    .min(8, { message: 'Kata sandi harus terdiri dari minimal 8 karakter' })
    .refine((val) => /[A-Z]/.test(val), { message: 'Kata sandi harus mengandung setidaknya satu huruf besar' })
    .refine((val) => /[a-z]/.test(val), { message: 'Kata sandi harus mengandung setidaknya satu huruf kecil' })
    .refine((val) => /[0-9]/.test(val), { message: 'Kata sandi harus mengandung setidaknya satu angka' })
    .refine((val) => /[!@#$%^&*]/.test(val), { message: 'Kata sandi harus mengandung setidaknya satu karakter khusus' }),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    no_telp: '087708956070',
    password: "admin123"
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (data: UserFormValue) => {
    signIn('credentials', {
      no_telp: data.no_telp,
      password: data.password,
      callbackUrl: callbackUrl ?? '/dashboard'
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
          <FormField
            control={form.control}
            name="no_telp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Telepon</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Masukan nomor telepon..."
                    disabled={loading}
                    {...field}
                  />
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
                    type="password"
                    placeholder="Masukan password..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} className="w-full ml-auto" type="submit">
            Submit
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">
            Jika belum punya akun silahkan <Link href="/register" className='text-blue-700 underline'>Register</Link>
          </span>
        </div>
      </div>
    </>
  );
}
