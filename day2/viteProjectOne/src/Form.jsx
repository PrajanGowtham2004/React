function Form() {
  return (
    <section className="form-section">
      <h2>Student Registration Form</h2>

      <form>
        <div>
          <label>Name: </label>
          <input type="text" placeholder="Enter Name" />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input type="email" placeholder="Enter Email" />
        </div>

        <br />

        <div>
          <label>Phone: </label>
          <input type="tel" placeholder="Enter Phone Number" />
        </div>

        <br />

        <div>
          <label>Course: </label>
          <select>
            <option>React JS</option>
            <option>Python</option>
            <option>Java</option>
            <option>Data Science</option>
          </select>
        </div>

        <br />

        <button type="submit">Register</button>
      </form>

      <hr />
    </section>
  );
}

export default Form;