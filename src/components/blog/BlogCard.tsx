import Image from "next/image";
import Link from "next/link";

interface BlogImage {
  id: string;
  url: string;
  position: number;
  blogId: string;
}

interface BlogCardProps {
  id: string;
  slug?: string;
  title: string;
  desc: string;
  author: string;
  readTime: number;
  images: BlogImage[];
  createdAt: Date;
}

const BlogCard = ({
  id,
  slug,
  title,
  desc,
  images,
}: BlogCardProps) => {
  const mainImage =
    images.find((img) => img.position === 0)?.url || "/images/placeholder.jpg";

  // strip HTML tags from desc to avoid rendering raw HTML as text
  const plainDesc = desc ? desc.replace(/<[^>]+>/g, "") : "";
  const truncatedDesc =
    plainDesc.length > 120 ? plainDesc.substring(0, 120) + "..." : plainDesc;

  return (
  <div className="border border-[#E8ECEE] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full card-uniform">
      {/* Image Section */}
      <div className="relative w-full h-52 ">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover p-3"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 flex-1 line-clamp-3">{truncatedDesc}</p>

        {/* Meta Info */}
        {/* <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
          {author && <span>By {author}</span>}
          {author && readTime && <span></span>}
          {readTime && <span>{readTime} min read</span>}
        </div> */}

        {/* Read More Button */}
        <Link
          href={`/blogs/${slug || id}`}
          className="w-full bg-[#FE5E0E] text-white hover:bg-[#E54D00] hover:shadow-lg py-2 px-4 rounded-md text-center font-medium text-sm transition-all duration-300 block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
