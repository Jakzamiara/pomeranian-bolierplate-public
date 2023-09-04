import "./styles.css";
export const Table = () => {
  return (
    <div className="first-table">
      <p className="pointone">
        1. The following data were collected by a group of students as they
        tested foru diffrent types of plastic.
      </p>
      <div className="table">
        <table>
          <tr>
            <th>Plastic</th>
            <th>Acetone</th>
            <th>Flame test</th>
            <th>Heat</th>
            <th>Crease color</th>
          </tr>
          <tr>
            <td>1</td>
            <td>No effect</td>
            <td>Green color</td>
            <td>Heat</td>
            <td>Crease color</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Softened</td>
            <td>No change</td>
            <td>No change</td>
            <td>White</td>
          </tr>
          <tr>
            <td>3</td>
            <td>No effect</td>
            <td>Red color</td>
            <td>Softens</td>
            <td>None</td>
          </tr>
          <tr>
            <td>4</td>
            <td>No effect</td>
            <td>Green color</td>
            <td>Softens</td>
            <td>None</td>
          </tr>
        </table>
        <div className="question">
          <p>
            Which plastic would be unsafe to use in store products that contain
            acetone?
            <ul>
              <li> 1</li>
              <li> 2</li>
              <li> 3</li>
              <li> 4</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
