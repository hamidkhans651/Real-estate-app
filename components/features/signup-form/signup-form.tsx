"use client";

import { FormProvider, } from "react-hook-form";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createUser } from "@/server/routers/users";
import { useState } from "react";
import { Loader } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });



  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
        await createUser(values);
        form.reset();
        // Optionally, redirect to the login page on success
    } catch (error: any) {
        if (error.message === "Email or username already exists.") {
            form.setError("email", { message: "Email already exists" });
            form.setError("username", { message: "Username already exists" });
        } else {
            console.error(error); // Handle other server errors
        }
    } finally {
        setIsLoading(false);
    }
}


  return (
    <FormProvider {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader className="size-4 animate-spin" />
            ) : (
              "Sign up with GitHub"
            )}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </form>
      </FormProvider>  );
}
