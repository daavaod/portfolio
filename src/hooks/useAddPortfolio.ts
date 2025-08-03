import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPortfolio } from '../services/api'
import type { NewPortfolioType } from '@/types/PortfolioTypes';

function useAddPortfolio() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: NewPortfolioType) => addPortfolio(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolios'] });
    },
  });
}

export {
  useAddPortfolio
}