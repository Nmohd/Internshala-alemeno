import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

const CourseDetails = () => {
  const { id } = useParams();

  const data = useSelector((state) => state.course);

  const course = data.data.find((x) => x.id === parseInt(id, 10));

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <center>
      <img className="details-img" src={course.thumbnail} />
      <div className="details-main">
        <h1>{course.name}</h1>
        <p>Instructor: {course.instructor}</p>
        <p>Description: {course.description}</p>
        <p>Enrollment Status: {course.enrollmentStatus}</p>
        <p>Course Duration: {course.duration}</p>
        <p>Schedule: {course.schedule}</p>
        <p>Location: {course.location}</p>
        <p>Pre-requisites: {course.prerequisites}</p>

        <details className="syllabus">
          <summary>Syllabus</summary>
          <ul>
            {course.syllabus.map((item, index) => (
              <li key={index}>
                Week {item.week}: {item.topic} - {item.content}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </center>
  );
};

export default CourseDetails;
