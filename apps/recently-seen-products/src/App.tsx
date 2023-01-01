import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecentlySeenProducts } from "./RecentlySeenProducts";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecentlySeenProducts />
    </QueryClientProvider>
  );
}
