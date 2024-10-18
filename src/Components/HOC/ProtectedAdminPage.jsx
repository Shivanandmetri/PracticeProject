import AdminPage from "./AdminPage";
import WithAuthorization from "./withAuthorization";

const ProtectedAdminPage = WithAuthorization(AdminPage, "admin"); 

export default ProtectedAdminPage;
