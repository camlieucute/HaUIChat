"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Header } from "@/components/shared/header";

export default function PolicyPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false); // State để theo dõi đồng ý với chính sách

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Chính Sách và Điều Khoản
      </h1>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">1. Chính Sách Bảo Mật</h2>
        <p>
          Chúng tôi cam kết bảo mật thông tin cá nhân của bạn. Mọi thông tin thu
          thập từ bạn sẽ được sử dụng chỉ để cải thiện dịch vụ và không chia sẻ
          với bên thứ ba mà không có sự đồng ý của bạn.
        </p>

        <h2 className="text-xl font-semibold">2. Chính Sách Sử Dụng</h2>
        <p>
          Bạn đồng ý sử dụng trang web này với mục đích hợp pháp và không vi
          phạm quyền lợi của bất kỳ bên nào. Bạn không được phép can thiệp vào
          hệ thống của chúng tôi hoặc sử dụng dịch vụ vào mục đích trái phép.
        </p>

        <h2 className="text-xl font-semibold">3. Điều Khoản Sử Dụng</h2>
        <p>
          Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản
          sau đây:
        </p>
        <ul className="list-disc pl-6">
          <li>Bạn phải tuân thủ các quy định pháp luật hiện hành.</li>
          <li>
            Không sử dụng dịch vụ của chúng tôi vào các hoạt động vi phạm quyền
            sở hữu trí tuệ hoặc vi phạm pháp luật.
          </li>
          <li>
            Chúng tôi có quyền thay đổi, sửa đổi hoặc ngừng dịch vụ mà không cần
            thông báo trước.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">4. Quyền Sở Hữu Trí Tuệ</h2>
        <p>
          Tất cả nội dung trên trang web này, bao gồm nhưng không giới hạn ở văn
          bản, hình ảnh, logo và phần mềm đều thuộc quyền sở hữu trí tuệ của
          chúng tôi hoặc các đối tác và được bảo vệ bởi luật sở hữu trí tuệ.
        </p>

        <h2 className="text-xl font-semibold">5. Thay Đổi Điều Khoản</h2>
        <p>
          Chúng tôi có quyền thay đổi, cập nhật hoặc sửa đổi các điều khoản này
          bất kỳ lúc nào mà không cần thông báo trước. Bạn nên kiểm tra các
          điềukhoản này thường xuyên để cập nhật thông tin mới nhất.
        </p>

        <div className="mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mr-2"
            />
            <label htmlFor="agree">
              Tôi đồng ý với Chính sách và Điều khoản
            </label>
          </div>
          <Button
            disabled={!agreed}
            onClick={() => {
              localStorage.setItem("policyAgreed", "true");
              router.push("/"); // Quay lại trang chủ hoặc sang /chat tùy bạn
            }}
          >
            Tiếp tục
          </Button>
        </div>
      </div>
    </div>
  );
}
