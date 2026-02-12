import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    API.get("/user/stores")
      .then(res => setStores(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Stores</h2>
      {stores.map(store => (
        <div key={store.id}>
          <h3>{store.name}</h3>
          <p>{store.address}</p>
          <p>Rating: {store.avgRating}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
