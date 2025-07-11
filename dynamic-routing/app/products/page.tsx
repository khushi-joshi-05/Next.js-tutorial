import Link from 'next/link';
export default function ProductList(){
    return(
        <>
        <Link href="/">Home</Link><br></br>
        <Link href="/blog">Blog</Link><br></br>
        <Link href="/products">Products</Link><br></br>
        <Link href="/_lib">Private</Link><br></br>
        <Link href="/about">About</Link><br></br>
        
        <h1> Products page</h1>
        <p>List of products will be displayed here</p>
        <p>Click on the product to see the details</p>
        <Link href="/products/product1">Product1</Link><br></br>
        <Link href="/products/product2">Product2</Link><br></br>
        <Link href="/products/product3">Product3</Link><br></br>
        
        </>
    )
}