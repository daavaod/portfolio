import { useQuery } from '@tanstack/react-query'
import { getPortfolios } from '../services/api'

function usePortfolios() {
  return useQuery({
    queryKey: ['portfolios'],
    queryFn: getPortfolios,
  })
}

export {
  usePortfolios
}