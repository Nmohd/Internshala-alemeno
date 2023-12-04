import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../redux/courseSlicer";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const data = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourse());
  }, []);

  const filteredData = data.data.filter(
    (x) =>
      x.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      x.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <center>
      <div className="home-main">
        <div className="home-header">
          <center>
            <input
              className="home-search"
              type="text"
              placeholder="Search with Course or Instructor"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </center>
        </div>
        {data.isLoading ? (
          <h1>Loading...</h1>
        ) : // Render the filtered data
        filteredData.length > 0 ? (
          filteredData.map((e) => (
            <Link className="home-link" to={`/course/${e.id}`} key={e.id}>
              <div className="home-list" key={e.id}>
                <img className="home-img" src={e.thumbnail} />
                <div className="home-content">
                  <h3>{e.name}</h3>
                  <p>Instructor : {e.instructor}</p>
                </div>
              </div>
              <hr className="home-hr"></hr>
            </Link>
          ))
        ) : (
          <p>No matching courses found.</p>
        )}
      </div>
    </center>
  );
};

export default Home;
