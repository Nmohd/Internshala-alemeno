import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentCourse } from "../redux/studentCourseSlicer";

const Dashboard = () => {
  localStorage.removeItem("setLoggedIn");

  let studentEmail = localStorage.getItem("userEmail");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentCourse(studentEmail));
  }, []);

  const data = useSelector((state) => state.studentCourse);

  return (
    <>
      <div>
        <center>
          <h2>Your courses </h2>
        </center>
        {data.data.map((e) => (
          <div key={e.id}>
            <center>
              <div className="home-main">
                <div className="home-list">
                  <img className="home-img" src={e.thumbnail} />
                  <div className="home-content">
                    <h4>Course Name : {e.name}</h4>
                    <p>Instructor: {e.instructor}</p>
                    <button className="mark">Mark as completed</button>
                  </div>
                </div>
              </div>
            </center>

            <div
              className="w3-small w3-light-grey w3-tiny"
              style={{ width: "50%", marginLeft: "20%" }}
            >
              <div
                className="w3-container w3-green"
                style={{ width: "50", marginLeft: "0%" }}
              >
                50
              </div>
            </div>
            <hr className="home-hr"></hr>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
