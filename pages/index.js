import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          {/* replace - prevents going back to the same page */}
          <Link replace href="/portfolio">Portfolio with replace</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;

// http://localhost:3000/

// using <a> tag for links sends a new http request
// makes the components to rerender
// and change the states to initial states.

// Link - it automatically pre fetches any data of the page 
// we might navigate to as soon as we hover over the link 