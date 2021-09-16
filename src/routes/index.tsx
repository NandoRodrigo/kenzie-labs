import { Switch } from "react-router-dom";

import Route from "./route";

import Home from "../pages/Home";
import AdminAllUsers from "../pages/AdminAllUsers";
import AboutUs from "../pages/AboutUs";
import AdminProductClass from "../pages/AdminProductClass";
import AdminEditParams from "../pages/AdminEditParams";
import AdminUserRegistration from "../pages/AdminUserRegistration";
import AnalistDashboard from "../pages/AnalistDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import AnalysesPending from "../pages/AnalysesPending";
import AnalysisDetails from "../pages/AnalysisDetails";
import Certificate from "../pages/Certificate";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={AdminAllUsers} isPrivate />
      <Route path="/register" component={AdminUserRegistration} isPrivate />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route exact path="/adminProductClass" component={AdminProductClass} />
      <Route exact path={"/admindashboard"} component={AdminDashboard} />
      <Route exact path={`/classes/:id`} component={AdminEditParams} />
      <Route exact path={"/analistdashboard"} component={AnalistDashboard} />
      <Route exact path="/analysespending" component={AnalysesPending} />
      <Route exact path="/analysespending/:id" component={AnalysisDetails} />
      <Route exact path={`/certificate/:id`} component={Certificate} />
    </Switch>
  );
};

export default Routes;
