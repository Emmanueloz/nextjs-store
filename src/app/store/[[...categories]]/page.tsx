interface CategoryProps {
  params: Promise<{
    categories: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function Category({
  params,
  searchParams,
}: CategoryProps) {
  const categories = (await params).categories;

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
