import Head from "next/head";

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Web Dev",
  keywords: "Programming",
  description: "Welcome to Web Dev",
};
