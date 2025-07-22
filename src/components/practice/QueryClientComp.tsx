import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query'

const client = new QueryClient();

function QueryClientComp() {

    return (
        <QueryClientProvider client={client}>
            <Posts />
        </QueryClientProvider>
    )

}

function Posts() {
    const {data, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
    })

    return (
        isLoading ? <p>Loading...</p> : <p>Posts: {data.length}</p>
    )
}

export default QueryClientComp