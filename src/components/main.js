export default function Main() {
  return (
    <>
      <div id="horse1" className="horse standRight">
        <div className="rider">
          <div className="head"></div>
          <div className="body"></div>
        </div>
      </div>

      <div id="horse2" className="horse standRight">
        <div className="rider">
          <div className="head"></div>
          <div className="body"></div>
        </div>
      </div>

      <div id="horse3" className="horse standRight">
        <div className="rider">
          <div className="head"></div>
          <div className="body"></div>
        </div>
      </div>

      <div id="horse4" className="horse standRight">
        <div className="rider">
          <div className="head"></div>
          <div className="body"></div>
        </div>
      </div>

      <div className="track">
        <div id="startline"></div>

        <div className="inner">
          <button id="start">Start Race</button>

          <div id="bet">
            <p>
              You currently have <span id="funds">100</span>
            </p>
            <label>Bet Amount £</label>
            <input type="number" id="amount" placeholder="0" />
            <label>Bet on horse:</label>
            <select id="bethorse">
              <option value="1">White</option>
              <option value="2">Blue</option>
              <option value="3">Green</option>
              <option value="4">Brown</option>
            </select>
            <label>Number of lap</label>
            <input type="number" id="num_lap" name="num_lap" value="1" />
          </div>
          <img src="./images/tree.png" className="tree" />
          <br />
          <table id="results">
            <thead>
              <tr>
                <th>Results</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st</td>
                <td className="result horse1"></td>
              </tr>
              <tr>
                <td>2nd</td>
                <td className="result horse2"></td>
              </tr>
              <tr>
                <td>3rd</td>
                <td className="result horse3"></td>
              </tr>
              <tr>
                <td>4th</td>
                <td className="result horse4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
