import { useContext, useEffect, useState } from "react";
import { Loading } from "../components";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";

const BrowseContainer = () => {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>{loading ? <Loading src={user.photoUrl} /> : <Loading.ReleaseBody />}</>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};
export default BrowseContainer;
