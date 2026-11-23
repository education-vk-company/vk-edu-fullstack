import { connect } from 'react-redux';
import { getUsersRequest } from './store/usersActions';

const PrepodsComponentNotConnected = (props) => {

  const loadPrepods = () => {
    props.getUsersRequest();
  }

  return (
    <div>
      <h1>Prepods</h1>
      <div>
        {props.loading && <p>Loading...</p>}
        {props.error && <p>{props.error}</p>}

        <ul>
          {props.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={loadPrepods}>Load Prepods</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
  }
}

const PrepodsComponent = connect(mapStateToProps, { getUsersRequest })(PrepodsComponentNotConnected);

function App() {
  return (
    <PrepodsComponent />
  )
}

export default App
