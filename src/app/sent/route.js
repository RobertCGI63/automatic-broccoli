export async function GET() {
  return new Response("Gotten!");
}

export async function POST(request) {
  if (request) {
    const userData = await request.json();
    console.log(userData);
  }
  return new Response(
    JSON.stringify({"message": "Sent!"}),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
