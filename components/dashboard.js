import Contacts from "./contacts";

const styles = {
  container: { textAlign: "center" }
};

export default function Dashboard({ admin: { username, id } }) {
  return (
    <div style={styles.container}>
      <h2>{`Welcome: ${username}`}</h2>
      <Contacts id={id} />
    </div>
  );
}
