import { usePortfolios } from '../../hooks/usePortfolios'
import Card from '../card/card'
import type { PortfolioTypes } from '@/types/PortfolioTypes'

function Portfolios() {

    const { data: portfolios, isLoading, error } = usePortfolios()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading portfolios</div>

    return (
        <div className="grid grid-cols-3 gap-8">
            {portfolios?.map((item: PortfolioTypes) => (
                <Card key={item.id} title={item.name} description={item.description} link={item.link} linkText={item.linkText} techStack={item.techStack} />
            ))}
        </div>
    )
}

export default Portfolios