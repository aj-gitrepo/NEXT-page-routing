import { useRouter } from "next/router";

const ClientProjectsPage = () => {

  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  const loadProjectHandler = () => {
    // load data
    // router.push('/client/max/projecta');
    router.push({
      pathname: "/client/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" }
    })
  }

  return (
    <div>
      <h1>The Projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;

// http://localhost:3000/client/someclient
