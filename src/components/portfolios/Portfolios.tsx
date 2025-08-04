import { useGetPortfolios } from '../../hooks/useGetPortfolios'
import PortfolioCard from '../portfolio/PortfolioCard'
import type { PortfolioTypes } from '@/types/PortfolioTypes'

function Portfolios() {

    const { data: portfolios, isLoading, error } = useGetPortfolios()

    if (isLoading) return <div>Loading...</div> // TODO create loading comp
    if (error) return <div>Error loading portfolios</div> // TODO create message component (error, success, info etc.)

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios?.map((item: PortfolioTypes) => (
                <PortfolioCard key={item.id} id={item.id} title={item.name} description={item.description} link={item.link} linkText={item.linkText} techStack={item.techStack} />
            ))}
        </div>
    )
}

export default Portfolios