import Single from "../../src/components/Single/Single";
import { singleUser } from "../../src/data";

const UserPage = () => {
  return (
    <div>
      <Single {singleUser={...singleUser}} />
    </div>
  );
};

export default UserPage;
