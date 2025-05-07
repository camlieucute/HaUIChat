// pages/news/[id].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

interface NewsDetailProps {
  news: {
    id: string;
    title: string;
    category: string;
    content: string;
    date: string;
    image: string;
  };
}

const NewsDetail = ({ news }: NewsDetailProps) => {
  const router = useRouter();

  // Kiểm tra nếu trang chưa được chuẩn bị
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">{news.category}</span>
        <span className="text-sm text-gray-500">{news.date}</span>
      </div>
      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-96 object-cover mb-6"
        />
      )}
      <div className="prose">
        <p>{news.content}</p>
      </div>
    </div>
  );
};

// Get Static Paths: Lấy danh sách các ID của bài viết
export const getStaticPaths: GetStaticPaths = async () => {
  const newsItems = [
    { id: "1" }, // Ví dụ dữ liệu
    { id: "2" },
    { id: "3" },
  ];

  const paths = newsItems.map((item) => ({
    params: { id: item.id },
  }));

  return {
    paths,
    fallback: true, // Sử dụng `true` để sử dụng fallback
  };
};

// Get Static Props: Lấy dữ liệu bài viết chi tiết từ API hoặc tệp dữ liệu
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  // Giả sử bạn lấy dữ liệu từ API hoặc tệp dữ liệu
  const news = {
    id,
    title: `Title of news ${id}`,
    category: "News",
    content: `This is the detailed content for news item ${id}.`,
    date: "2025-05-07",
    image: `https://via.placeholder.com/600x400?text=Image+${id}`,
  };

  return {
    props: {
      news,
    },
  };
};

export default NewsDetail;
