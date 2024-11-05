
import NewPostForm from "../components/posts/NewPostForm";

function NewPostPage() {
  return <NewPostForm  />;
}

export default NewPostPage;

// async function loadCategories() {
//   const response = await fetch("http://localhost:3000/api/category");

//   if (!response.ok) {
//     // return { isError: true, message: 'Could not fetch events.' };
//     // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
//     //   status: 500,
//     // });
//     throw json(
//       { message: "Could not fetch categories." },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     const resData = await response.json();
//     return resData.category;
//   }
// }

// export async function loader() {
//   return defer({
//     categories: loadCategories(),
//   });
// }
