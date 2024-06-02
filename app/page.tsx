import TestimonialCard from "./components/TestimonialCard";

const data = {
  name: "Sarah Dole",
  username: "sarahdole",
  image: "/img_avatar.png",
  context: "I've been searching for high quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TestimonialCard data={data} />
    </main>
  );
}
