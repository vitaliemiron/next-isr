export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

export default function Page({ params }: any) {
  return <div>Hello World ID - {params.id} </div>;
}
