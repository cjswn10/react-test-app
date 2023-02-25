import StoreComponent from "/components/Store";

const Store = ({ stores }) => <StoreComponent stores={stores} />;

export async function getStaticProps() {
  const response = await fetch("http://localhost:9000/stores");
  const data = await response.json();
  return { props: { stores: data || [] } };
}

export default Store;
