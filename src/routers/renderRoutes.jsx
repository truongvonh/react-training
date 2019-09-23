import React from "react";
import { Route } from "react-router-dom";


const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        //Truyền các props từ cha xuống con mà không cần phải khai báo props tương tự như sau nhưng ngắn gọn hơn
        //<route.component component={route.componet} props={route.props} routes={route.routes} />
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default RouteWithSubRoutes;