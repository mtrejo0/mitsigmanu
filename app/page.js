import About from "./about/page"

export const metadata = {
  title: "MIT Sigma Nu",
  description:
    "MIT's Epsilon Theta Chapter of Sigma Nu Fraternity. A brotherhood fostering leadership, excellence and lifelong friendships since 1922.",
  openGraph: {
    title: "MIT Sigma Nu",
    images: [
      {
        url: "/images/about/chapter.png", 
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/about/chapter.png"],
  },
};


export default function Home() {
  return (
    <About/>
  );
}
