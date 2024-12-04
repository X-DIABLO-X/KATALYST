// utils/userUtils.js
import { auth } from "./firebase/firebase";

export const getUserInfo = () => {
  const user = auth.currentUser;
  if (user) {
    return {
      name: user.displayName || "User", // Returns the name if available
      profilePic: user.photoURL || "../../AI/images/user.jpg", // Default if no profile picture is set
    };
  }
  return { name: "Guest", profilePic: "../../AI/images/user.jpg" }; // Default for non-logged-in users
};
