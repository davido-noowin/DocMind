export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 px-4 text-center dark:bg-black">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        DocMind
      </h1>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        AI-powered knowledge assistant. Sprint 0: scaffolding day.
      </p>
      <a
        href="/status"
        className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        View service status
      </a>
    </main>
  );
}
