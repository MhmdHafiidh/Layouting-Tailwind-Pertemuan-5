import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { defaultMetadata } from '../utils/metadata';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: any) {
    const metadata = children.props.metadata || defaultMetadata;
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title> {metadata.title}</title>
                <meta name="description" content={metadata.description} />
                {/* Open Graph Tags*/}
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:image" content={metadata.openGraph.imgae} />
                <meta property="og:url" content={metadata.openGraph.url} />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

