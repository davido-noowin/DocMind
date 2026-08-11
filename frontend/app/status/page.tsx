"use client";

import { useEffect, useState } from "react";
import { CORE_API_URL, AI_SERVICE_URL } from "@/lib/config";

type ServiceStatus = "checking" | "up" | "down";

function useHealthCheck(url: string): ServiceStatus {
  const [status, setStatus] = useState<ServiceStatus>("checking");

  useEffect(() => {
    let cancelled = false;

    fetch(`${url}/health`)
      .then((res) => {
        if (!cancelled) setStatus(res.ok ? "up" : "down");
      })
      .catch(() => {
        if (!cancelled) setStatus("down");
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return status;
}

function StatusRow({ name, status }: { name: string; status: ServiceStatus }) {
  const color =
    status === "up"
      ? "bg-green-500"
      : status === "down"
      ? "bg-red-500"
      : "bg-yellow-400";

  return (
    <div className="flex w-full max-w-sm items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-800">
      <span className="text-sm font-medium text-black dark:text-zinc-50">
        {name}
      </span>
      <span className="flex items-center gap-2 text-sm text-zinc-500">
        <span className={`h-2 w-2 rounded-full ${color}`} />
        {status}
      </span>
    </div>
  );
}

export default function StatusPage() {
  const coreApiStatus = useHealthCheck(CORE_API_URL);
  const aiServiceStatus = useHealthCheck(AI_SERVICE_URL);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 px-4 dark:bg-black">
      <h1 className="mb-2 text-2xl font-semibold text-black dark:text-zinc-50">
        Service Status
      </h1>
      <StatusRow name="Core API (Java)" status={coreApiStatus} />
      <StatusRow name="AI Service (Python)" status={aiServiceStatus} />
    </main>
  );
}
