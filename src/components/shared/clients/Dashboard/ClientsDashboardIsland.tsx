import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientsDashboardPage from "./ClientsDashboardPage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 2,
    },
  },
});
export default function ClientsDashboardIsland() {
  return (
    <QueryClientProvider client={queryClient}>
      <ClientsDashboardPage />
    </QueryClientProvider>
  );
}
