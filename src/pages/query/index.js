import React from 'react'

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
  

const queryClient = new QueryClient()

export default function QueryTest() {
    return (
        <QueryClientProvider client={queryClient}>
          <Example />
        </QueryClientProvider>
      )
}

function Example() {
    const { isLoading, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        fetch('https://my-json-server.typicode.com/typicode/demo/posts').then(
          (res) => res.json(),
        ),
    })
  
    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <div>
        {data.map((d) => (
            // console.log(d.id)
            <p key={d.id}>{d.title}</p>
        )
        )}
      </div>
    )
  }
