const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ parts }) => {
  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} parts={part} />
      ))}
    </div>
  );
};

const Total = ({ course }) => {
  return (
    <p>
      <strong>
        total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
        excercices
      </strong>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
