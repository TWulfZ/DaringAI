import supabaseClient from "@lib/supaClient";

async function getToken(): Promise<string | undefined> {
  const { data: {session}} = await supabaseClient.auth.getSession();
  return session?.access_token;
}

export default getToken