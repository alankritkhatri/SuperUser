import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFGen from "./PDFGen";
import { Button } from "@mui/material";
import { useState } from "react";

const Invoices = () => {
  const [companyName, SetCompanyName] = useState("");
  const [address, Setaddress] = useState("");
  const [companyName, SetCompanyName] = useState("");
  const [companyName, SetCompanyName] = useState("");
  return (
    <div>
      <form action="">
        <input
          className="text-black"
          placeholder="Company Name"
          onChange={(e) => {
            SetCompanyName(e.target.value);
          }}
          type="text"
        />
        <input
          className="text-black"
          placeholder="Company Address"
          onChange={(e) => {
            Setaddress(e.target.value);
          }}
          type="text"
        />
        <input
          className="text-black"
          placeholder="Company Address"
          onChange={(e) => {
            Setaddress(e.target.value);
          }}
          type="text"
        />
        <input
          className="text-black"
          placeholder="Company Address"
          onChange={(e) => {
            Setaddress(e.target.value);
          }}
          type="text"
        />
      </form>
      <div className="box box10">
        <h1 className="underline ">Invoice</h1>
        <PDFDownloadLink
          fileName="Invoice"
          document={<PDFGen companyName={companyName} />}
        >
          {({ loading }) => (
            <Button>{loading ? "Loading" : "Download "}</Button>
          )}
        </PDFDownloadLink>
        <PDFGen companyName={companyName} />
      </div>
    </div>
  );
};

export default Invoices;
