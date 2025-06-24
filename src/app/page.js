"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to default locale
    router.replace("/id");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p>Redirecting...</p>
        <p className="text-sm text-gray-500 mt-2">
          If you are not redirected automatically,
          <a href="/id" className="text-blue-500 hover:underline ml-1">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
