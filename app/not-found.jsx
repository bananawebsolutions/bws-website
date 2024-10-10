import Header1 from "@/components/headers/Header1";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Erorr - Banana Web Solutions",
};
export default function NotFoundPage() {
  return (
    <>
      <Header1 />
      <div className="error-wrapper text-center">
        <div className="container">
          <Image
            width={856}
            height={246}
            className="mb-50"
            src="/assets/img/normal/404.png"
            alt="error"
          />
          <h2>Parece ser que estás perdido</h2>
          <p className="sec-text mb-30">
            El enlace que seguiste probablemente esté roto o la página ha sido
            eliminada.
          </p>
          <Link scroll={false} href="/" className="link-btn">
            <span className="link-effect">
              <span className="effect-1">volver a inicio</span>
              <span className="effect-1">volver a inicio</span>
            </span>
            <Image
              width={13}
              height={13}
              src="/assets/img/icon/arrow-left-top.svg"
              alt="icon"
              style={{ width: "13px", height: "13px" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
