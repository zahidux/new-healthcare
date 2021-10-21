import { useContext } from "react";
import { AuthContaxt } from "../context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContaxt)
};

export default useAuth;