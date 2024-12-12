import Container from "@/components/Container";
import Profile from "@/components/home/profile";

export default function Home() {
  return (
    <div className="bg-bodycolor text-white/80 ">
      <Container>
        <Profile />
      </Container>
    </div>
  );
}
