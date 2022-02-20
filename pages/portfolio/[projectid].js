import { useRouter } from "next/router"; //for classbased - withRouter

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname); // /portfolio/[projectid]
  console.log(router.query); // { projectid: "jhgjh" }

  // can send a request to some backend server to fetch
  // the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;

// dynamic page routing
// http://localhost:3000/portfolio/jhgjh
// portfolio/[anything] returns this page
// [].js - [] acts as placeholder
