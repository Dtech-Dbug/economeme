import styles from "../styles/Home.module.css";
import Nav from "./Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";
import { currentUser } from "../Functions/user";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    console.log("USEEFFECT");
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userIdToken = await user.getIdTokenResult();
        console.log("User logged In ", user);
        console.log("fetching fromoue BE...", userIdToken.token);

        currentUser(userIdToken.token).then((res) => {
          console.log("res of current", res);
          dispatch({
            type: "USER_LOGGED_IN",
            payload: {
              email: user.email,
              token: userIdToken.token,
              name: user.displayName,
              id: res.data.id,
              photo: user.photoURL,
              // name: res.data.name,
              // id: res.data.id,
            },
          });
        });
      }
    });
    //cleanup
    return () => unSubscribe();
  }, []);

  return (
    <>
      <div className={styles.layoutContainer}>
        <div className={styles.layout}>
          <Nav />
          <div className={styles.container}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
