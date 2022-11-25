import { useRouter } from "next/router";

const SelectedProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname); // /client/[id]/[clientprojectid]
  console.log(router.query); // { id: "someclient", clientprojectid: "someproject" }

  return (
    <div>
      <h1>The project page of a specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectedProjectPage;

// http://localhost:3000/client/someclient/someproject
