import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Test } from "./components/Test";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">App</div>
      <Test />
    </QueryClientProvider>
  );
}
