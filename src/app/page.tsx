import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function LandingPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Se o usuário estiver logado, redireciona para o app do aluno
  if (user) {
    redirect("/app");
  }

  // Por enquanto, redireciona para login
  // No futuro, aqui será a Landing Page principal (V2)
  redirect("/login");
}
