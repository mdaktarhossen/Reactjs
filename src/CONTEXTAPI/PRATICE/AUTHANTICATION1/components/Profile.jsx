import { useUserContext } from "../contexts/UserContext";

export default function Profile() {
  const { user } = useUserContext();
  // if (!user) return <h2>Not Found</h2>;
  return (
    <>
      {user ? (
        <div>
          <h2>This is profiel:</h2>
          <p>Name:{user.username}</p>
          <p>Password:{user.password}</p>
        </div>
      ) : (
        <h2>No</h2>
      )}
    </>
  );
}
