import { useQuery, useMutation } from "@tanstack/react-query";
import type { TJobOffer } from "@/types/TJobOffer";
import { careersService } from "@/services/careers-service";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
export interface PaginatedJobOffers {
  data: TJobOffer[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const useJobOffers = (params: {
  title?: string;
  location?: string;
  page?: number;
  pageSize?: number;
}) => {
  return useQuery({
    queryKey: ["jobOffers", params],
    queryFn: () => careersService.getJobOffers(params),
  });
};

export const useTitlesJobOffers = () => {
  return useQuery({
    queryKey: ["titlesJobOffers"],
    queryFn: () => careersService.getTitlesJobOffers(),
  });
};

export const useCountriesQuery = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: () => GetCountries(),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
export const useJobOffer = (id: string) => {
  return useQuery({
    queryKey: ["jobOffer", id],
    queryFn: () => careersService.getJobOfferById(id),
    enabled: !!id,
  });
};

export const useApplyToJob = () => {
  return useMutation({
    mutationFn: (formData: FormData) => careersService.applyToJob(formData),
  });
};
