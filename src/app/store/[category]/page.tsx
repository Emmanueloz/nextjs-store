interface CategoryParams {
  category: string;
}

export default async function Page({
  params,
}: {
  params: Promise<CategoryParams>;
}) {
  const category = (await params).category;
  return <h1>Categoría dinámica {category}</h1>;
}
