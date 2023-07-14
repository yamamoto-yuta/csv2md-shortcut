import "./style.scss"

function IndexPopup() {
  return (
    <div className="popup">

      <div className="popup-title">
        - How To Use -
      </div>

      <div className="popup-content">
        <div className="column">
          <div className="usage-text">
            <div>
              1. Select text
            </div>
          </div>
          <div className="usage-content">
            <div>
              <span className="text-selected">a,b<br />c,d</span>
            </div>
          </div>
          <div className="usage-content">
            <div>
              <span className="text-selected">| a | b |<br />| --- | --- |<br />| c | d |</span>
            </div>
          </div>
          <div className="usage-content">
            <div>
              (Otherwise)
            </div>
          </div>
        </div>

        <div className="column">
          <div className="usage-text">
            <div>
              2. Use shortcut
            </div>
          </div>
          <div className="usage-content">
            <div>
              Win: <span className="shortcut-span">Alt</span> + <span className="shortcut-span">j</span><br />
              Mac: <span className="shortcut-span">Cmd</span> + <span className="shortcut-span">j</span>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="usage-text">
            <div>
              3. Save conveted text<br />on clipbard
            </div>
          </div>
          <div className="usage-content">
            <div>
              <div className="clipboard-div">
                | a | b |<br />| --- | --- |<br />| c | d |
              </div>
            </div>
          </div>
          <div className="usage-content">
            <div>
              <div className="clipboard-div">
                a, b<br />c, d
              </div>
            </div>
          </div>
          <div className="usage-content">
            <div>
              <div className="clipboard-div">
                | col1 | col2 | col3 |<br />| --- | --- | --- |<br />| | | |
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="usage-text">
            <div>
              4. Paste
            </div>
          </div>
          <div className="usage-content">
            <div>
              Win: <span className="shortcut-span">Ctrl</span> + <span className="shortcut-span">v</span><br />
              Mac: <span className="shortcut-span">Cmd</span> + <span className="shortcut-span">v</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup