import Link from "next/link"

export default function Home(){
    return(
        <>
     <h1> Home page</h1>
        <Link href="/about">About</Link><br></br>
        <Link href="/blog">Blog</Link><br></br>
        <Link href="/products">Products</Link><br></br>
        <Link href="/_lib">Private</Link><br></br>
        
     </>
    )
}