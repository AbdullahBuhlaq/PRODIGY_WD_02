import "./style/Laps.css";

function Laps({ laps }) {
  try {
    return (
      <>
        <div className="laps-container">
          {laps.length ? (
            <>
              <table>
                <thead>
                  <th>Lap</th>
                  <th>Lap Times</th>
                  <th>Overall Time</th>
                </thead>

                {laps.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <span className="digits">{("0" + Math.floor((index ? item - laps[index - 1] : item / 60000) % 60)).slice(-2)}:</span>
                        <span className="digits">{("0" + Math.floor((index ? item - laps[index - 1] : item / 1000) % 60)).slice(-2)}.</span>
                        <span className="digits mili-sec">{("0" + ((index ? item - laps[index - 1] : item / 10) % 100)).slice(-2)}</span>
                      </td>
                      <td>
                        <span className="digits">{("0" + Math.floor((item / 60000) % 60)).slice(-2)}:</span>
                        <span className="digits">{("0" + Math.floor((item / 1000) % 60)).slice(-2)}.</span>
                        <span className="digits mili-sec">{("0" + ((item / 10) % 100)).slice(-2)}</span>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </>
          ) : null}
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Laps;
