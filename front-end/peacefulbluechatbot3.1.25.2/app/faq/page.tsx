"use client"; // Thêm dòng này để đánh dấu là Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Thêm dòng này để import Button

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // State để theo dõi câu hỏi nào đang mở
  const router = useRouter(); // Khởi tạo router

  const faqs = [
    {
      question: "1. Chính sách bảo mật là gì?",
      answer:
        "Chính sách bảo mật của chúng tôi giải thích cách thu thập, sử dụng và bảo vệ thông tin cá nhân của người dùng.",
    },
    {
      question: "2. Làm thế nào để liên hệ với bộ phận hỗ trợ?",
      answer:
        "Bạn có thể gửi email đến địa chỉ hỗ trợ camlieu0086@gmail.com hoặc gọi số hotline 0356090056.",
    },
    {
      question: "3. Chatbot có hỗ trợ 24/7 không?",
      answer:
        "Đúng vậy, chatbot của chúng tôi hỗ trợ người dùng mọi lúc, mọi nơi.",
    },
    {
      question: "4. Chatbot này có thể trả lời những câu hỏi nào?",
      answer:
        "Chatbot của chúng tôi có thể trả lời các câu hỏi liên quan đến thông tin trường học, các hoạt động tình nguyện, sự kiện, và nhiều câu hỏi khác.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Câu Hỏi Thường Gặp
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <div
              className="font-semibold text-lg cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              {faq.question}
            </div>
            {openFAQ === index && (
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button
          className="bg-purple-600 text-white hover:bg-purple-700"
          onClick={() => router.push("/")} // Chuyển hướng về trang chính
        >
          Trở về trang chính
        </Button>
      </div>
    </div>
  );
}
