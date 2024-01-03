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
        fetch('http://10.10.7.156:3001/jame/todos').then(
          (res) => res.json(),
        ),
    })
  
    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
  
    // console.log(data)
    
    return (
      <div>
        {data.map((d) => (
            console.log(d)
            // <p key={d.id}>{d.title}</p>
        )
        )}
      </div>
    )
  }
