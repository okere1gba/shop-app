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
import MyProducts from "./routes/products/products_page";
import Contact_page from "./routes/contacts/contact_page";
import DatauploadPage from "./routes/dataUpload/dataupload_page";
import Login_dashboard from "./component/dashboard/login_dashbored";
import Directory from "./component/directory/directory.component";
import Allproducts from "./component/product components/Allproducts";
//   return (
//     <div>
//       <div>
//         <h1>i am the navigation bar</h1>
//       </div>
//       <Outlet />
//     </div>
//   );
// };*/

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomeIntroductionPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="chackout" element={<Chackout />} />
          <Route path="contact" element={<Contact_page />} />
          {/* <Route path="about" element={<About_page />} /> */}
          <Route path="upload" element={<DatauploadPage />} />
        </Route>
        <Route path="home" element={<Directory />}>
          <Route path="dashboard" element={<Login_dashboard />} />
          {/* <Route path="productupload" element={<Upload_Product />} /> */}
        </Route>

        <Route path="products" element={<MyProducts />}>
          <Route path="sections" element={<Allproducts />} />
        </Route>
      </Routes>
    </>
  );
};

{
  /* <Route path="/" element={<Navigation />}>
          <Route index element={<HomeIntroductionPage />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact_page />} />
          <Route path="about" element={<About_page />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
         

          <Route path="home" element={<Directory />}>
            <Route path="dashboard" element={<Login_dashboard />} />
            <Route path="productupload" element={<Upload_Product />} />
            <Route path="chackout" element={<Chackout />} />
          </Route> */
}
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
