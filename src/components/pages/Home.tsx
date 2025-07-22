import Card from '../card/card'

function Home() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-8">
                <Card title="title" content="content"/>
                <Card title="title" content="content"/>
                <Card title="title" content="content"/>
            </div>
        </div>
    )
}

export default Home