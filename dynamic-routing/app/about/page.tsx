import Link from 'next/link';
export default function About(){
    return (
        <>  
        <Link href="/">Home</Link><br></br>
        <Link href="/blog">Blog</Link><br></br>
        <Link href="/products">Products</Link><br></br>
        <Link href="/_lib">Private</Link><br></br>
    <h1> About page</h1>
    </>
    )
}