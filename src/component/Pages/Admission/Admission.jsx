import axios from "axios";
import { useEffect, useState } from "react";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios
      .get("https://unipath-server.vercel.app/colleges")
      .then((data) => setColleges(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
      <div className="w-4/5 mx-auto my-10">
      <div className="overflow-x-auto">
        
        <table className="table table-zebra">
          
          <thead>
            <tr>
              <th></th>
              <th>College Name</th>
              <th>Location</th>
                          <th>Rank</th>
                          <th></th>
            </tr>
          </thead>
                  <tbody>
      
                      {
                          colleges.map((c, index) => {
              <tr key={c.id}>
                <th>{index}</th>
                <td>{c.name}</td>
                <td>{c.location}</td>
                  <td>{c.rank}</td>
                  <td><button className="button-primary">Select</button></td>
              </tr>
                          })
                      }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;
<h1>from admission</h1>;
