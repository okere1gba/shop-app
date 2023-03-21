import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
//import SignIn from "./routes/authentication/authenication.comp";
import LoginPage from "./routes/authentication/authenication.comp";
import LoginForm from "./component/sign-in form/login.form";
import Shop from "./routes/shop/shop.component";
import Chackout from "./routes/chackout/chack-out-component";
import SignUp from "./component/signup-form/signup.component";
import ProtectedRoutes from "./routes/protectedRoutes";
import PublicRoutes from "./routes/publicRoutes";
import HomeIntroductionPage from "./routes/introduction-page/home-introductionpage";
/*const Navigation = () => {
  return (
    <div>
      <div>
        <h1>i am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};*/

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route>
          <Route index element={<HomeIntroductionPage />} />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="chackout" element={<Chackout />} />
        </Route>
        <Route path="login" element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="shop" element={<Shop />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
};

/* return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};*/

export default App;
