import React from "react";
import { Page1, Page2, Page3, Page4 } from "./components/pages";
import "./App.css";

// font from my portfolio site,
// typing animation? no like a
function App() {
  return (
    <div className="App">
      <section>
        <header className="App-header">Letters to the Internet</header>
        {/* css grid  */}
        <div className="letters">
          <div className="letter l1"></div>
          <div className="letter l2"></div>
          <div className="letter l3"></div>
          <div className="letter l4"></div>
          <div className="letter l5"></div>
          <div className="letter l6"></div>
          <div className="letter l7"></div>
          <div className="letter l8"></div>
          <div className="letter l9"></div>
          <div className="letter l10"></div>
        </div>

        <div class="set">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div class="set set2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <div class="set set3">
              <div>
                <Page2 />
              </div>
              <div>
                <Page2 />
              </div>
              <div>
                <Page2 />
              </div>
              <div>
                <Page2 />
              </div>
              <div>
                <Page2 />
              </div>
              <div>
                <Page2 />
              </div>
              <div>
                <Page2 />
              </div>
              <div>
                <Page2 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
