function Filter({ setStatusFilter }) {
  const handleChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const backgroundColor = "pink";

  return (
    <div className="filter">
      <h5 className="heading5">My Todos</h5>
      <form>
        <label htmlFor="status">Status:</label>
        <select id="status" onChange={handleChange} style={{ backgroundColor}}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notcompleted">Not Completed</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
