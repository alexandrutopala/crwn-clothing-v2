import "./categories.styles.scss";

import {Routes, Route} from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
    return <h1>Shop page</h1>
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                {/*"index" marks the nested route that will be rendered when the parent route is reached*/}
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
            </Route>
        </Routes>
    );
}

export default App;
