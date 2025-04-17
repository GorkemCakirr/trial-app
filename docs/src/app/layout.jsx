import {Footer, Layout, Navbar} from "nextra-theme-docs";
import {Inter} from "next/font/google";
import {Head} from "nextra/components";
import {getPageMap} from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Image from "next/image";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: "Bucket UI Documentation",
  description: "Bucket UI Documentation",
  icons: {
    icon: "https://bucketui.com/favicon.ico",
  },
};

// const banner = <Banner storageKey='some-key'>Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Image
          src="https://bucketui.com/favicon.ico"
          alt="Bucket UI"
          width={24}
          height={24}
        />
        <span>Bucket UI</span>
      </div>
    }
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Image
        src="https://bucketui.com/favicon.ico"
        alt="Bucket UI"
        width={24}
        height={24}
      />
      <span>Bucket UI © {new Date().getFullYear()}</span>
    </div>
  </Footer>
);

const inter = Inter({subsets: ["latin"]});

export default async function RootLayout({children}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body className={inter.className}>
        <Layout
          //   banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          feedback={{content: null}}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
