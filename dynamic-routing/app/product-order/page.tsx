"use client";
import { useRouter } from "next/navigation";

export default function ProductOrder() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/products");
  };

  return (
    <>
      <h1>Product Order Page</h1>
      <p>Order details will be displayed here</p>
      <button onClick={handleClick}>Go to Products</button>
    </>
  );
}   