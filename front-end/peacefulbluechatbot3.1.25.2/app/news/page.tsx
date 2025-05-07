import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/shared/header";
import Link from "next/link";

export default function NewsPage() {
  const categories = [
    "Tất cả",
    "Tin tức",
    "Sự kiện",
    "Hoạt động sinh viên & Khởi nghiệp",
    "Hoạt động khoa học công nghệ",
    "Câu lạc bộ",
  ];

  const newsItems = [
    {
      id: 1,
      title:
        "Hội thảo khoa học quốc tế “Công nghệ bền vững và nổi bật cho sản xuất thông minh”",
      date: "11:46 23/04/2025",
      summary:
        "Ngày 22/4, tại Trường Đại học Công nghiệp Hà Nội, Hội thảo Quốc tế lần thứ hai “Công nghệ bền vững và nổi bật cho sản xuất thông minh” (SETSM 2025) đã được tổ chức.",
      category: "Tin tức",
      image: "/hoithao.jpg",
      link: "/news/1",
    },
    {
      id: 2,
      title: "Thông tin tuyển sinh đại học năm 2025",
      date: "05:13 29/04/2025",
      summary:
        "Trường Đại học Công nghiệp Hà Nội công bố Thông tin tuyển sinh đại học năm 2025.",
      category: "Tin tức",
      image: "/t107205.jpg",
      link: "/news/2",
    },
    {
      id: 3,
      title:
        "Khai thác thông tin số: Chìa khóa nâng tầm giảng dạy và nghiên cứu",
      date: "11:07 19/04/2025",
      summary:
        "Nhằm trang bị cho đội ngũ cán bộ, giảng viên công cụ và phương pháp tiếp cận tri thức hiện đại, sáng ngày 26/4, Trung tâm Thông tin Thư viện, Trường Đại học Công nghiệp Hà Nội (HaUI) tổ chức buổi tập huấn “Khai thác tài nguyên thông tin phục vụ giảng dạy, học tập và nghiên cứu khoa học” với sự tham gia của gần 60 cán bộ, giảng viên trong toàn trường.",
      category: "Tin tức",
      image: "/t107141.jpg",
      link: "/news/3",
    },
    {
      id: 4,
      title:
        "Nghiệm thu đề tài NCKH cấp Trường “ Thu nhận nanocellulose và lignin từ vỏ quả sầu riêng hướng đến ứng dụng thử nghiệm trong lĩnh vực vật liệu”",
      date: "13:13 14/04/2025",
      summary:
        "Đề tài do TS. Trần Ý Đoan Trang- Viện Nghiên cứu HaUI và các cộng sự thực hiện. PGS.TS. Vũ Minh Tân - Giám đốc Trung tâm Đào tạo sau Đại học làm chủ tịch Hội đồng nghiệm thu.",
      category: "Tin tức",
      image: "/t106491.jpg",
      link: "/news/4",
    },
    {
      id: 5,
      title:
        "HaUI hưởng ứng tháng hành động An toàn thực phẩm năm 2025: Vì sức khỏe viên chức, người lao động, người học - Vì tương lai phát triển bền vững",
      date: "07:52 05/04/2025",
      summary:
        "An toàn vệ sinh thực phẩm là vấn đề cấp thiết, ảnh hưởng trực tiếp đến sức khỏe cộng đồng, đặc biệt trong môi trường giáo dục như trường Đại học Công nghiệp Hà Nội (HaUI) – nơi có trên 35 nghìn viên chức, người lao động, học viên, sinh viên học tập và làm việc.",
      category: "Sự kiện",
      image: "/t107255.jpg",
      link: "/news/5",
    },
    {
      id: 6,
      title:
        "Chuyên gia 'Cửa sổ tình yêu' đồng hành cùng sinh viên trong tư vấn tâm lý, sức khỏe thể chất và giáo dục sức khỏe tâm thần năm 2025",
      date: "07:54 28/04/2025",
      summary:
        "Nhằm đồng hành, hỗ trợ sinh viên trong việc chăm sóc sức khỏe thể chất và tinh thần, Phòng Công tác sinh viên, Trường Đại học Công nghiệp Hà Nội đã tổ chức thành công chương trình Tọa đàm tư vấn tâm lý, sức khỏe thể chất và giáo dục sức khỏe tâm thần cho sinh viên năm 2025 tại cơ sở Hà Nội và cơ sở 3 Hà Nam.",
      category: "Sự kiện",
      image: "/t107178.jpg",
      link: "/news/6",
    },
    {
      id: 7,
      title:
        "Các chương trình đào tạo bằng tiếng Anh tại HaUI thu hút sự quan tâm của “thế hệ công dân toàn cầu” tương lai",
      date: "11:00 12/04/2025",
      summary:
        "Trong hai ngày 11 và 12/04/2025, Trường Đại học Công nghiệp Hà Nội (HaUI) chào đón hơn 1.000 các thầy cô giáo, phụ huynh và học sinh Trường Tiểu học, THCS, THPT Nguyễn Công Trứ (Nam Định) và Trường THPT Lạc Long Quân (Sóc Sơn, Hà Nội) đến tham quan và tìm hiểu nhà trường.",
      category: "Sự kiện",
      image: "/t106491.jpg",
      link: "/news/7",
    },
    {
      id: 8,
      title:
        "Sinh viên HaUI tỏa sáng tại sân chơi Olympic và Ngày hội khởi nghiệp quốc gia 2025",
      date: "13:45 23/04/2025",
      summary:
        "Sinh viên Trường Đại học Công nghiệp Hà Nội (HaUI) tiếp tục khẳng định bản lĩnh tại các sân chơi học thuật toàn quốc khi mang về 16 giải thưởng cá nhân; các giải tập thể xuất sắc tại Kỳ thi Olympic Toán học và Hóa học năm 2025 và giải thưởng tại Ngày hội khởi nghiệp quốc gia của học sinh sinh viên lần thứ VII, năm 2025.",
      category: "Hoạt động sinh viên & Khởi nghiệp",
      image: "/t106938.jpg",
      link: "/news/8",
    },
    {
      id: 9,
      title:
        "Sinh viên HaUI sẵn sàng chinh phục Kỳ thi Olympic Cơ học toàn quốc",
      date: "12:52 12/04/2025",
      summary:
        "Sáng ngày 12/4, Trường Đại học Công nghiệp Hà Nội (HaUI) tổ chức buổi gặp mặt đội tuyển dự thi Olympic Cơ học toàn quốc lần thứ 35 và vinh danh các sinh viên đạt giải cấp trường.",
      category: "Hoạt động sinh viên & Khởi nghiệp",
      image: "/t106513.jpg",
      link: "/news/9",
    },
    {
      id: 10,
      title:
        "Tuổi trẻ HaUI chung tay cùng 20 triệu thanh niên xây dựng vị thế và tầm vóc của Việt Nam trong kỷ nguyên số",
      date: "07:00 25/03/2025",
      summary:
        "Trong chương trình Đối thoại với thanh niên năm 2025, Thủ tướng Chính phủ Phạm Minh Chính nhấn mạnh 20 triệu thanh niên sẽ quyết định vị thế và tầm vóc của Việt Nam trong kỷ nguyên số; tầm nhìn và khát vọng phát triển đất nước tới năm 2045 rất cần sự đóng góp, trí tuệ của lực lượng này.",
      category: "Hoạt động sinh viên & Khởi nghiệp",
      image: "/t105903.jpg",
      link: "/news/10",
    },
    {
      id: 11,
      title:
        "Chương trình liên kết 3+1 - Hành trình đáng nhớ của sinh viên HaUI tại Trung Quốc",
      date: "10:49 25/02/2025",
      summary:
        "Phạm Trà My, cựu Liên chi Hội trưởng Liên chi Hội Sinh viên Trường Ngoại ngữ - Du lịch thuộc Trường Đại học Công nghiệp Hà Nội (HaUI), hiện đang là sinh viên năm cuối ngành Ngôn ngữ Trung Quốc theo chương trình liên kết 3+1 giữa Trường Đại học Công nghiệp Hà Nội và Trường Đại học Khoa học Kỹ thuật Quảng Tây (Trung Quốc). Hành trình học tập và trải nghiệm tại đất nước tỷ dân không chỉ mang đến cho Trà My những kiến thức chuyên môn vững chắc mà còn là hành trang quý giá về văn hóa, con người và sự trưởng thành vượt bậc.",
      category: "Hoạt động khoa học công nghệ",
      image: "/t105033.jpg",
      link: "/news/11",
    },
    {
      id: 12,
      title:
        "Nữ sinh ngành công nghệ kỹ thuật điện tử - viễn thông trưởng thành từ công tác Đoàn, Hội",
      date: "15:51 21/03/2025",
      summary:
        "Những ngày tháng “cháy hết mình” trong môi trường năng động của công tác Đoàn Thanh niên, Hội Sinh viên Trường Đại học Công nghiệp Hà Nội (HaUI) đã tôi luyện nên một Nguyễn Thanh Tuyền - sinh viên lớp đại học công nghệ kỹ thuật điện tử - viễn thông khoá 17 mạnh mẽ và tự tin.",
      category: "Hoạt động khoa học công nghệ",
      image: "/t105838.jpg",
      link: "/news/12",
    },
    {
      id: 13,
      title:
        "Câu lạc bộ thanh niên tình nguyện Trường Công nghệ thông tin và Truyền thông",
      date: "08:38 21/12/2021",
      summary:
        "'Muốn đi nhanh thì đi một mình, muốn đi xa hãy đi cùng CLB Thanh niên Tình nguyện Trường Công nghệ thông tin và Truyền thông' Được thành lập từ năm 2008 trực thuộc khoa Công nghệ thông tin, sau 13 năm phát triển và cống hiến, Đội Thanh niên tình nguyện Trường Công nghệ thông tin và Truyền thông đã trở thành một phần không thể thiếu của Trường nói riêng và là lực lượng thanh niên tình nguyện lớn mạnh trong Trường Đại học Công Nghiệp Hà Nội nói chung.",
      category: "Câu lạc bộ",
      image: "/t77825.jpg",
      link: "/news/13",
    },
    {
      id: 14,
      title:
        "Câu lạc bộ Truyền thông Trường Công nghệ thông tin và Truyền thông FIT Media",
      date: "08:38 21/12/2021",
      summary:
        "Được thành lập vào ngày 17/05/2014, Bộ phận truyền thông Trường Công nghệ thông tin và Truyền thông FIT Media đang từng bước từng bước khẳng định vị trí của mình tại Trường Đại học Công nghiệp Hà Nội. Trong suốt chiều dài 9 năm phát triển của mình, FIT Media luôn đóng vai trò là kênh cung cấp thông tin kịp thời và chính xác nhất cho người xem.",
      category: "Câu lạc bộ",
      image: "/t77823.jpg",
      link: "/news/14",
    },
    {
      id: 15,
      title:
        "Câu lạc bộ Hỗ trợ kỹ thuật Trường Công nghệ thông tin và Truyền thông IT-Supporter SICT",
      date: "08:38 21/12/2021",
      summary:
        "Câu lạc bộ Hỗ trợ kỹ thuật Trường Công nghệ thông tin và Truyền thông IT-Supporter SICT là một tổ chức hoạt động vì cộng đồng nhằm hỗ trợ xử lý các sự cố liên quan đến các hệ thống máy tính, hệ thống mạng cho các tổ chức và mọi người, là đội trực thuộc LCĐ -LCH Sinh viên Trường Công nghệ thông tin và Truyền thông - Đại học Công nghiệp Hà Nội.",
      category: "Câu lạc bộ",
      image: "/t77826.jpg",
      link: "/news/15",
    },
    {
      id: 16,
      title:
        "Câu lạc bộ Nghệ thuật Trường Công nghệ thông tin và Truyền thông iStar",
      date: "08:38 21/12/2021",
      summary:
        "Sau hơn 4 năm hoạt động, câu lạc bộ Nghệ thuật iStar đã trở thành bộ phận chuyên trách về nghệ thuật chủ chốt của Trường Công nghệ thông tin và Truyền thông, đồng thời là một thành viên nhiệt huyết trong công tác Đoàn – Hội của nhà trường, mở ra thật nhiều những cơ hội cho tất cả các bạn sinh viên Trường Công nghệ thông tin và Truyền thông nói riêng và HaUI nói chung có cơ hội được tỏa sáng, thỏa mãn đam mê và được đứng trên sân khấu của chính họ.",
      category: "Câu lạc bộ",
      image: "/t77828.jpg",
      link: "/news/16",
    },
    {
      id: 17,
      title:
        "Câu lạc bộ Thể thao điện tử Trường Công nghệ thông tin và Truyền thông HEC",
      date: "08:38 21/12/2021",
      summary:
        "Câu lạc bộ Thể thao điện tử Trường Công nghệ thông tin và Truyền thông HEC CLB HEC được thành lập với mục đích mang bộ môn Esports đến gần hơn với sinh viên Trường Công nghệ thông tin và Truyền thông nói riêng và trường Đại học Công nghiệp nói chung. Phòng máy Esports Training Room của HEC được trang đầy đủ thiết bị thi đấu phục vụ cho các giải đấu esports chuyên nghiệp.",
      category: "Câu lạc bộ",
      image: "/t77821.jpg",
      link: "/news/17",
    },
    {
      id: 18,
      title: "Đội Olympic Tin học",
      date: "09:47 29/12/2023",
      summary:
        "Là đội tuyển đại diện cho Trường Công nghệ thông tin và Truyền thông - Trường Đại học Công nghiệp Hà Nội ôn luyện và tham gia các kì thi Olympic quốc gia và quốc tế .Trải qua gần 20 năm không ngừng phấn đấu và nỗ lực, Đội Olympic Tin học Trường Công nghệ thông tin và Truyền thông - Trường Đại học Công nghiệp Hà Nội tự hào là đơn vị đạt được nhiều thành tích cao trong các cuộc thi trong nước do Hội Tin học Việt Nam tổ chức cũng như các cuộc thi trong khu vực.",
      category: "Câu lạc bộ",
      image: "/t77832.jpg",
      link: "/news/18",
    },
    {
      id: 19,
      title:
        "Câu lạc bộ Tin học Trường Công nghệ thông tin và Truyền thông HIT",
      date: "08:38 21/12/2021",
      summary:
        "Câu lạc bộ tin học HIT là Câu lạc bộ hoạt động trong lĩnh vực Công nghệ thông tin trực thuộc Trường Công nghệ thông tin và Truyền thông - Trường Đại học Công Nghiệp Hà Nội. Được thành lập vào ngày 18/8/2010.",
      category: "Câu lạc bộ",
      image: "/t77830.jpg",
      link: "/news/19",
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Điểm tin hoạt động
          </h1>
          <p className="text-gray-600 text-lg">
            Cập nhật những tin tức và hoạt động nổi bật của Trường Đại học Công
            nghiệp Hà Nội
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="Tất cả" className="mb-8">
          <TabsList className="w-full flex-wrap h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsItems
                  .filter(
                    (item) =>
                      category === "Tất cả" || item.category === category
                  )
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full"
                    >
                      <CardHeader className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="secondary"
                            className="bg-blue-500 text-white"
                          >
                            {item.category}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="text-lg font-semibold">
                          {item.title}
                        </CardTitle>
                      </CardHeader>

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                      )}

                      <CardContent className="flex flex-col justify-between flex-grow p-4 pt-2">
                        <p className="text-sm text-gray-600">{item.summary}</p>
                        <div className="flex justify-end mt-4">
                          <Link href={item.link}>
                            <Button className="text-sm">Đọc chi tiết</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
