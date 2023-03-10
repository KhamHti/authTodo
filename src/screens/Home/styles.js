import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top: 40,
  },
  logo: {
    width: 180,
    height: 180,
  },
  formContainer: {
    flexDirection: "row",
    height: 80,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#2B3467",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  listContainer: {
    marginTop: 20,
    padding: 20,
  },
  entityContainer: {
    marginTop: 16,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  entityText: {
    fontSize: 20,
    color: "#2B3467",
  },
});

export { styles };
