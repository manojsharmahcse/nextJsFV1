"use server";

import { loginSchema } from "./schemas";

export async function loginAction(formData: FormData) {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.flatten().fieldErrors };
  // TODO: verify credentials + create session
  return { success: true };
}
