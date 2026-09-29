export default async function OrderDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <h1 className="text-2xl font-semibold">Order #{id}</h1>;
}
