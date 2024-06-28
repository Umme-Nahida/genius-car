import { useContext } from "react";
import { AuthContext } from "../Firebase/Provider/AuthProviderr";


const PrivateRoute = ({children}) => {
const {isloading,user} = useContext(AuthContext);

   if(isloading && user.email){
    return  <progress className="progress w-56"></progress>
   }
   return {children}
};

export default PrivateRoute;