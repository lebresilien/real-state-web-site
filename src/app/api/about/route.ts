export async function GET() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/about`, { next: { revalidate: 10 } });
    const data = await res.json();
    return new Response(JSON.stringify(data));
  }