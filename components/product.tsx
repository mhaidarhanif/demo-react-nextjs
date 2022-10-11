import useSWR from "swr";

interface ExampleProductProps {
  id: string;
}

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const ExampleProduct = ({ id }: ExampleProductProps) => {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
