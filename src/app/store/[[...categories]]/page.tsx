interface CategoryParams {
  categories: string[];
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<CategoryParams>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const categories = (await params).categories;
  const search = await searchParams;
  console.log(categories);
  console.log(search);

  return (
    <>
      <h1>Categoría dinámica </h1>
      <ul>
        {categories?.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
}
