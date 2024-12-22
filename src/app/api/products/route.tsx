export default async function GET() {
  const message = "Hello from the API!";

  return Response.json({ message });
}
