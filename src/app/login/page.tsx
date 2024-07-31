"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,  
  } from "@/components/ui/form";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchemas } from "@/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { login } from "@/actions/login";

export default function Component() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchemas>>({
        resolver: zodResolver(LoginSchemas),
        defaultValues: {
          email: "",
          password: "",
        },
      });

      const onSubmit = (values: z.infer<typeof LoginSchemas>) => {
        console.log(values);
        
        setError("");
        setSuccess("");
        
        startTransition(() => {
          login(values, callbackUrl)
          .then((data) => {
            console.log(callbackUrl);
            
            if (data?.error) {
              form.reset();
              console.log(data.error);
              
              setError(data.error);
            }
  
           
  
            
          })
          .catch(() => setError("Something went wrong"));
           
        });
      };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-muted-foreground">Enter your email and password to sign in to your account.</p>
        </div>
        <Card>
          <CardContent className="space-y-4">
          <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="123456"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="john.doe@example.com"
                          type="email"
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
                          {...field}
                          disabled={isPending}
                          placeholder="******"
                          type="password"
                        />
                      </FormControl>
                      <Button
                        size="sm"
                        variant="link"
                        asChild
                        className="px-0 font-normal"
                      >
                        <Link href="/auth/reset">
                          Forgot password?
                        </Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </>
          )}
          </div>
          {/* <FormError message={error || urlError} />
          <FormSuccess message={success} /> */}
          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
          >
            {showTwoFactor ? "Confirm" : "Login"}
          </Button>
        </form>
      </Form>
          </CardContent>
          
        </Card>
        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="#" className="underline underline-offset-4" prefetch={false}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}