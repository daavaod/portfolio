import { useQuery } from '@tanstack/react-query'
import { getPortfolios } from '../services/api'

function useGetPortfolios() {
  return useQuery({
    queryKey: ['portfolios'],
    queryFn: getPortfolios,
  })
}

export {
  useGetPortfolios
}