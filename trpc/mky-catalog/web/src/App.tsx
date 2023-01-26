import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "./utils/trpc";

function App() {
  const queryClient = useQueryClient();
  const animesQuery = useQuery(['allAnimes'], () => api.allAnime.query())  
  const createAnimeMutation = useMutation(["createAnime"], api.createAnime.mutate)

  const [name, setName] = useState("")
  const [year, setYear] = useState("")

  if (animesQuery.isLoading) return <div>Loading...</div>;
  if (animesQuery.isError) return <div>ERROR!</div>;

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{JSON.stringify(animesQuery.data?.allAnimes)}</p>
      <form onSubmit={(e) => {
        e.preventDefault()
        createAnimeMutation.mutate({ name, year });
        queryClient.invalidateQueries('allAnimes');
      }}>
        <input type="text" placeholder="Naruto" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="2003" value={year} onChange={(e) => setYear(e.target.value)} />
        <button type="submit">Add anime</button>
      </form>
    </div>
  )
}

export default App
