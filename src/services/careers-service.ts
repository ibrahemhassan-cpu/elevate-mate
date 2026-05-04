import api from "@/lib/axios";

export const careersService = {
  async getJobOffers({
    page = 1,
    pageSize = 10,
    ...filters
  }: {
    title?: string;
    location?: string;
    page?: number;
    pageSize?: number;
  }) {
    const cleanParams = Object.fromEntries(
      Object.entries({ page, pageSize, ...filters }).filter(([key, value]) => {
        // Omit empty strings, null, or undefined
        if (value === "" || value === null || value === undefined) return false;

        // Omit page=1 and pageSize=10 as they are backend defaults
        if (key === "page" && value === 1) return false;
        if (key === "pageSize" && value === 10) return false;

        return true;
      }),
    );
    const response = await api.get("/job-offers", {
      params: cleanParams,
    });
    return response.data;
  },

  async getJobOfferById(id: string) {
    const response = await api.get(`/job-offers/${id}`);
    return response.data?.data;
  },

  async getTitlesJobOffers() {
    const response = await api.get("/job-titles");
    return response.data?.data || [];
  },

  async applyToJob(formData: FormData) {
    const response = await api.post("/apply", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};
