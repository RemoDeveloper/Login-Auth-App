"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="p-4 text-xl">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Welcome to Lotus Bloom 🌸</h1>

      {session ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl">Hello, {session.user?.name}!</p>
          <Button variant="destructive" onClick={() => signOut()}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl">You are not logged in.</p>
          <Button onClick={() => signIn("google")}>Login with Google</Button>
        </div>
      )}
    </div>
  );
};

export default Home;
