import { unstable_noStore } from "next/cache";
import Image, { ImageLoader, ImageLoaderProps } from "next/image";
import { ReactNode } from "react";

export default async function MessagesLayout({ children }) {
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
      {/* <Image src={''} alt="asd" loader={imageLoader} /> */}
    </>
  );
}
