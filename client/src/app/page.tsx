import BackendStatus from "@/components/BackendStatus";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1>Bit</h1>
      <BackendStatus />
    </main>
  );
}