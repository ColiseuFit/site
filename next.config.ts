import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://okcjuyxtboxbkprcacpgj.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rY2p1eHRib3hicXBrcmFjcGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDE5NDcsImV4cCI6MjA5MDA3Nzk0N30.jcfNaTmQANgYA5r3cUy2TkPJgdxRJm6KFCSf9P2sTn8",
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
