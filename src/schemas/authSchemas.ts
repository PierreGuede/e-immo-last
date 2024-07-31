import { z } from "zod";

export const RegisterSchemas = z.object({
    email: z.string().email({
        message: "email requis",
    }),
    password: z.string().min(8, {
        message: 'le mot de passe doit contenir minimum 8 caractère'
    }),
    confirmPassword: z.string().min(4),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirmPassword']
        });
    }
});

export const LoginSchemas = z.object({
    email:  z.string().email({
        message: "email requis",
    }),
    password: z.string().min(8, {
        message: 'le mot de passe doit contenir minimum 8 caractère'
    }),
})