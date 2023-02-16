import axios from "axios";
import { useQuery } from "react-query";
import { Card } from "./Components/Card";
import "./Reset.css";
import "./App.css";
export default function App() {
  const { isLoading, error, data } = useQuery("posts", () =>
    axios.get(`https://dummyjson.com/users`)
  );
  return (
    <>
      <div className="App">
        <div className="main-container">
          {isLoading && <p>Loading...</p>}
          {!isLoading && (
            <div className="row">
              {data.data.users.map((user) => {
                return (
                  <div className="column" key={user.id}>
                    <Card
                      fullName={user.firstName + " " + user.lastName}
                      userName={user.username}
                      gender={user.gender}
                      designation={user.company.title}
                      age={user.age}
                      email={user.email}
                      phone={user.phone}
                      dateOfBirth={user.birthDate}
                      address={user.address.address}
                      imageSrc={user.image}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
