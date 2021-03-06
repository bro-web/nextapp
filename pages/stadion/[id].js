import axios from "axios";
import { useRouter } from "next/router";

function StadionDetail({ data }) {
  // const router = useRouter();
  // const {id} = router.query
  return (
    <>
      <h1 className="border-2 text-3xl mx-8 border-indigo-500 my-4 text-indigo-500">
        {" "}
        {data.title}
      </h1>
      <p className="border-2 mx-8 border-purple-600 my-4 text-purple-600">
        {data.body}
      </p>
    </>
  );
}

export default StadionDetail;

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  console.log(context.params.id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
