"use client";

import Link from "next/link";
import { ThemeSupa, supabase } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthPage = () => {
  const supabase = createClientComponentClient();

  return (
    <>
      <div className="w-full min-h-screen bg-white" id="AuthPage">
        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          <Link href="/" className="min-w-[170px]">
            <img src="/images/logo.svg" width="170" alt="" />
          </Link>
        </div>

        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          Login / Register
        </div>

        <div className="max-w-[400px] mx-auto px-2">
          <Auth
            onlyThirdPartyProviders
            appearance={{ theme: ThemeSupa }}
            providers={["google"]}
            redirectTo={`${window.location.origin}/auth/callback`}
            supabaseClient={supabase}
          />
        </div>
      </div>
    </>
  );
};

export default AuthPage;
