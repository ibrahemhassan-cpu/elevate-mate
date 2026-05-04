import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import JobOfferDetail from "./JobOfferDetail";

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

interface Props {
  id: string;
  pathname: string;
}

export default function JobOfferDetailIsland({ id, pathname }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <JobOfferDetail id={id} pathname={pathname} />
    </QueryClientProvider>
  );
}
