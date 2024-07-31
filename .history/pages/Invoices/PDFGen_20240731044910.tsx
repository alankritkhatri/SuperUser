import { Page, Text, Document, StyleSheet, Image } from "@react-pdf/renderer";
import imgg from "../../public/1330017.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 16,
    fontWeight: 800,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    textDecoration: "underline",
  },
  parent: {
    display: "flex",
    margin: "20px",
    gap: "20px",
  },
});
type Props = {
  companyName: string;
  companyCountry: string;
  address1: string;
  address2: string;
};
const PDFGen = (props: Props) => {
  return (
    <Document>
      <Text style={styles.header} fixed>
        Invoice
      </Text>
      <Page className="underline" style={styles.parent}>
        <Text style={styles.header} fixed>
          {props.companyName}
        </Text>

        <Text style={styles.header} fixed>
          {props.address1}
        </Text>
        <Text style={styles.header} fixed>
          {props.address2}
        </Text>
        <Text style={styles.text} fixed></Text>
      </Page>
    </Document>
  );
};

export default PDFGen;
