import { useRouter } from "next/router";
import { teamMembers } from "../../public/data/team";

function ViewProfile() {
  const router = useRouter();
  const { id } = router.query;

  if (id) {
    return (
      <>
        <h1>{id}</h1>
      </>
    );
  }
}

export default ViewProfile;
