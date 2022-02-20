import { useRouter } from "next/router";

const BlogPostPage = () => {

  const router = useRouter();

  console.log(router.pathname); ///blog/[...slug]
  console.log(router.query); //  [ "someyear", "somedate", "postid" ]

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostPage;

// http://localhost:3000/blog/someyear/somedate/postid

// catct all routes
// to support paths such as
// blog/2021/21/[id of post]
// done by using [...] in file name - ... is catch all path