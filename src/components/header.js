import Head from "next/head";

const Header = props => (
  <Head>
    <meta name="author" content="CleberW3b - Cléber Oliveira" key="author" />
    <title>{props.title}</title>
    <link rel="shortcut icon" href="/static/favicon.ico" key="icon" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <meta
      name="msapplication-TileColor"
      content="#ffffff"
      key="msapplication-TileColor"
    />
    <meta
      name="msapplication-TileImage"
      content="/static/ms-icon-144x144.png"
      key="msapplication-TileImage"
    />
    {props.extra_meta
      ? props.extra_meta.map(ex_meta => (
          <meta
            name={ex_meta.name}
            content={ex_meta.content}
            key={ex_meta.name}
          />
        ))
      : null}
  </Head>
);

export default Header;
