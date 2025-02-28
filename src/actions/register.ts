"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { RegisterSchemas } from "@/schemas/authSchemas";

export const register = async (values: z.infer<typeof RegisterSchemas>) => {
  const validatedFields = RegisterSchemas.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

//   const verificationToken = await generateVerificationToken(email);
//   await sendVerificationEmail(
//     verificationToken.email,
//     verificationToken.token,
//   );

  return { success: "Confirmation email sent!" };
};
