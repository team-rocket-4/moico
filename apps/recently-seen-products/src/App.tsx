import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./utils/trpc";
import { Test } from "./components/Test";

export function App() {
  const [count, setCount] = useState(0);
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        httpBatchLink({
          url: `${
            import.meta.env.DEV
              ? "http://localhost:3000"
              : "https://moico-admin.vercel.app"
          }/api/trpc`,
        }),
      ],
    });
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
        <Test />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
