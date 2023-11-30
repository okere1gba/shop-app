import "./dataupload_page.css";
import { useState, useEffect } from "react";
import { db } from "../../utills/firebase/firebase.utills";
import {
  getDownloadURL,
  listAll,
  uploadBytes,
  ref,
  getStorage,
} from "firebase/storage";
import { v4 } from "uuid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "../../component/button/button.componet";
import { settingDocuments } from "../../utills/firebase/firebase.utills";
import { upDatingDocuments } from "../../utills/firebase/firebase.utills";
import { serverTimestamp } from "firebase/firestore";
import { subCollections } from "../../utills/firebase/firebase.utills";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, CircularProgress } from "@mui/material";

const formInfo = ["business", "price", "product", "quaniity", "cellphone"];

const DatauploadPage = () => {
  const [imageUpload, setimageUpload] = useState(null);
  const [description, setsiscription] = useState("");
  const [nameIn, setnameIn] = useState("");
  const [loading, setloading] = useState(false);
  const [formData, settingFormData] = useState({
    name: "",
    business: "",
    description: "",
    price: "",
    product: "",
    quaniity: "",
    cellphone: "",
  });

  //   console.log("outside", image);
  const storage = getStorage();

  useEffect(() => {
    const handleImageUpload = () => {
      const imgRef = ref(
        storage,
        `catergoriesImage/${imageUpload.name + v4()}`
      );
      uploadBytes(imgRef, imageUpload).then((snapshot) => {
        console.log("sucessful upload");
        getDownloadURL(snapshot.ref)
          .then((url) => {
            settingFormData((prev) => ({
              ...prev,
              imgUrl: url,
              times: serverTimestamp(),
              description: description,
              name: nameIn,
            }));
          })
          // .then((prev) => {
          //   setimage(url);

          //   value = localStorage.setItem("imagurl", url);
          //   upDatingDocuments(url);
          // })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            console.log(formData);
            console.log("done");
          });
      });
    };

    imageUpload && handleImageUpload();
  }, [imageUpload]);

  const HandlerSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);
    setloading(true);
    try {
      subCollections(formData.name, formData);
      console.log("succesfull");
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }

    //   .then(() => {
    //     console.log("processing.....");
    //   })
    //   .catch((err) => {

    //   })
    //   .finally(() => {
    //     console.log("succesfull");
    //   });
  };

  const onChangehandler = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    settingFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleNameChange = (event) => {
    setnameIn(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setsiscription(event.target.value);
  };
  //   useEffect(() => {
  //     listAll(ref(storage, "catergoriesImage")).then((res) => {
  //       res.items.forEach((val) => {
  //         getDownloadURL(val).then((url) => {
  //           setimage((prev) => [...prev, url]);
  //         });
  //       });
  //     });
  //   }, []);

  //   console.log("imgurl", image);

  //   const getbackImage = () => {
  //     ;
  //   };

  //   getbackImage(); "react-scripts": "5.0.1",

  return (
    <div className="alignment">
      <form className="form_align" onSubmit={HandlerSubmit}>
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nameIn}
              label="Name"
              onChange={handleNameChange}
            >
              <MenuItem value="Palm Oil">Palm Oil</MenuItem>
              <MenuItem value="Export Products">Export Products</MenuItem>
              <MenuItem value="Furits">Furits</MenuItem>
              <MenuItem value="Grain Products">Grain Products</MenuItem>
              <MenuItem value="Packaged Products">Packaged Products</MenuItem>
              <MenuItem value="Seed Products">Seed Products</MenuItem>
              <MenuItem value="Tuber">Tuber</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {formInfo.map((data) => {
          return (
            <Box
              sx={{ margin: "20px" }}
              component="form"
              noValidate
              autoComplete="off"
            >
              {/* <label className="labels">{data}</label> */}
              <TextField
                id="outlined-basic"
                label={data}
                variant="outlined"
                name={data}
                onChange={onChangehandler}
              />
            </Box>
          );
        })}

        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          name={description}
          maxRows={4}
          onChange={handleDescriptionChange}
        />

        <input
          className="margin"
          type="file"
          onChange={(e) => setimageUpload(e.target.files[0])}
        />
        <Button type="submit" buttonType="logo">
          {loading ? (
            <CircularProgress
              size={25}
              sx={{
                margin: "1rem 0",
              }}
            />
          ) : (
            "Submit"
          )}
        </Button>
      </form>

      {/* <button onClick={handleImageUpload}>Upload</button> */}

      {/* <div className="butt_width">
        <Button onClick={handleImageUpload} buttonType="logo">
          Upload
        </Button>
      </div> */}

      {/* {image.map((url) => {
        return <img className="size" src={url} />;
      })} */}
    </div>
  );
};
export default DatauploadPage;

//  const HandleSubmit = async (event) => {
//     event.preventDefault();
//     // make sure that the password and the confirm password are thesame
//     setloading(true);

//     getResponse()
//       .then((response) => {
//         console.log("111");
//         if (response) {
//           navigator("/home");
//         }
//       })

//       .catch((error) => {
//         switch (error.code) {
//           case "auth/wrong-password":
//             alert("incorrect password for email");
//             break;
//           case "auth/user-not-found":
//             alert("there is no user associated with this email");
//             break;
//           default:
//             console.log(error);
//         }
//       })
//       .finally(() => setloading(false));
//     /*  if (error.code === "auth/wrong-password") {
//         alert("incorrect password for email");
//       } else if (error.code === "auth/user-not-found") {
//         alert("there is no user associated with this email");
//       }
//       console.log(error);
//     }*/
//   };

// {
//   /* <form onSubmit={HandleSubmit}>
//         <Button type="button" buttonType="logo" onClick={signInWithGoogle}>
//           <Googlelogo className="googlelogo" />
//           Google Sign in
//         </Button>

//         <div className="breakline">
//           <div className="or">
//             <span className="text">OR</span>
//           </div>

//           <div className="onediv">
//             <hr />
//           </div>
//           <div className="twodiv">
//             <hr />
//           </div>
//           <span className="text2">Sign in with your email and password</span>
//         </div>

//         <FormInput
//           label="Email"
//           type="email"
//           required
//           onChange={handleChange}
//           name="email"
//           value={email}
//         />

//         <FormInput
//           label="Password"
//           type="password "
//           required
//           onChange={handleChange}
//           name="password"
//           value={password}
//         />
//         <div className="button-section1">
//           <Button type="submit">
//             {loading ? (
//               <CircularProgress
//                 size={25}
//                 sx={{
//                   margin: "1rem 0",
//                 }}
//               />
//             ) : (
//               "Sigin in"
//             )}
//           </Button>
//         </div>

//         <Link onClick={changeToSigninPage}>
//           Don't have an account? Please SignUp
//         </Link>
//       </form> */
// }
