import profilePic from "../assets/profile.jpg";

export default function HomePage() {
  return (
    <main className="container text-center">
      <h1>Welcome to my portfolio!</h1>
      <img src={profilePic} alt="Profile Picture" className="profile" />
      <p className="mt-2">
        This is a work in progress. Check back soon for more updates!
      </p>
    </main>
  );
}
