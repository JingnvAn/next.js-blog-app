import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Image 
            src="/images/JandBird.jpg"
            height={384}
            width={216}
            alt="Jingnu's profile picture"
            />
            {/* <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2> */}
        </Layout>
    )
}