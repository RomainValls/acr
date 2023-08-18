"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Navbar_1 = require("./components/Navbar");
var react_router_dom_1 = require("react-router-dom");
var Homepage_1 = require("./components/Homepage");
function App() {
    return (<>
      <Navbar_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Homepage_1.default />}/>
        {/* <Route path="/association" element={<Association />} />
        <Route path="/partenaires" element={<Partenaire />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/videos" element={<Videos />} /> */}
      </react_router_dom_1.Routes>
    </>);
}
exports.default = App;
