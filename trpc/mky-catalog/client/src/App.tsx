import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "./utils/trpc";

function App() {
  const queryClient = useQueryClient();
  const monkeysQuery = useQuery(["allMky"], () => api.allMky.query());
  const createMonkeyMutation = useMutation(
    ["createMonkey"],
    api.createMonkey.mutate
  );

  const [name, setName] = useState("");
  const [age, setAge] = useState(Number);
  const [specie, setSpecie] = useState("");
  const [photoUrl, setphotoUrl] = useState("");

  if (monkeysQuery.isLoading) return <div>Loading...</div>;
  if (monkeysQuery.isError) return <div>ERROR!</div>;

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{JSON.stringify(monkeysQuery.data?.allMky)}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createMonkeyMutation.mutate({ name, age, specie, photoUrl });
          queryClient.invalidateQueries("allMonkeys");
        }}
      >
        <input
          type="text"
          placeholder="czar"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="69"
          value={age}
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />
        <input
          type="text"
          placeholder="babuino"
          value={specie}
          onChange={(e) => setSpecie(e.target.value)}
        />
        <input
          type="text"
          placeholder="bololohaha"
          value={photoUrl}
          onChange={(e) => setphotoUrl(e.target.value)}
        />
        <button type="submit">Add monkey</button>
      </form>
    </div>
  );
}

export default App;
