import Image from "next/image";

export default function ProfilePicture() {
  return (
    <Image
      src="/images/profile.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );
}
