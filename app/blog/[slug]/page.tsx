export const revalidate = 1200; // not necessary, just for ISR demonstration - this will refresh the data after some time

interface Post {
  // shape of the post object we fetch from the server
  title: string;
  content: string;
  slug: string;
}

export async function generateStaticParams() {
  // faster than dynamic SSR because Next knows where to get a param from - good for when there's just a certain set of params and data will not change much
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug, // an object of all dynamic params
  }));
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  // deduped
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!; // non-null assertion (!) - we know for sure that there will be no null value - prevent some TS errors - but use this sparingly and better check for null values using control flow

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
