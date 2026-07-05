function Table() {
  return (
    <section className="table-section">
      <h2>Student Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul</td>
            <td>React JS</td>
            <td>Chennai</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Priya</td>
            <td>Python</td>
            <td>Madurai</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Arun</td>
            <td>Java</td>
            <td>Coimbatore</td>
          </tr>
        </tbody>
      </table>

      <hr />
    </section>
  );
}

export default Table;