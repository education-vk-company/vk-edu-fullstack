import { useUsersStore } from './store/store';

const PrepodsComponent= () => {

  const usersStore = useUsersStore()

  const loadPrepods = () => {
    usersStore.getUsersRequest();
  }

  return (
    <div>
      <h1>Prepods</h1>
      <div>
        {usersStore.users.loading && <p>Loading...</p>}
        {usersStore.users.error && <p>{usersStore.users.error}</p>}

        <ul>
          {usersStore.users.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={loadPrepods}>Load Prepods</button>
    </div>
  )
}

function App() {
  return (
    <PrepodsComponent />
  )
}

export default App
