

const Persons = ({ persons, query }) => {
    return(
      <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
    </ul>
    )
  
  };

export default Persons