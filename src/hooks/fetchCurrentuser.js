import { useContext, useEffect, useState } from "react";
import { ServiceLocator } from "../context/serviceProvider";
import { UserContext } from "../context/userContext";

const fetchCurrentUser = ([]) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { authService } = useContext(ServiceLocator);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    (async function () {
      setLoading(true);
      authService
        .getCurrentUser()
        .then((res) => {
          setLoading(false);
          setCurrentUser(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          console.log("error occurred in getting current user");
          console.log(err);
        });
    })();
  }, []);

  return [data, error, loading, setData, setLoading];
};

export { fetchCurrentUser };
