import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFGen from "./PDFGen";
import { Button } from "@mui/material";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./invoices.css";

const Invoices = () => {
  const [companyName, SetCompanyName] = useState("");
  const [address1, Setaddress1] = useState("");
  const [address2, SetAdress2] = useState("");
  const [companyCountry, Setcountry] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="containerr">
      <div className="box">
        <h1 className="underline ">Invoice</h1>
        <div className="invoice-details">
          <form action="">
            <div className="flex">
              <h1>Invoice Number: </h1>
              <input
                className="text-black"
                placeholder="Invoice Number"
                onChange={(e) => {
                  SetCompanyName(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="invoice-dates flex">
              <h1>Invoice Date : </h1>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </div>
            <div className="invoice-dates flex">
              <h1>Due Date:</h1>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </div>
          </form>
        </div>
        <div className="company-details flex ">
          <h1>Company Details</h1>
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
                Setaddress1(e.target.value);
              }}
              type="text"
            />
            <input
              className="text-black"
              placeholder="City,State,Pincode"
              onChange={(e) => {
                SetAdress2(e.target.value);
              }}
              type="text"
            />
            <input
              className="text-black"
              placeholder="Company Country"
              onChange={(e) => {
                Setcountry(e.target.value);
              }}
              type="text"
            />
          </form>
        </div>
        <div className="client-details flex ">
          <h1>Client Details</h1>
          <form action="">
            <input
              className="text-black"
              placeholder="Client Name"
              onChange={(e) => {
                SetCompanyName(e.target.value);
              }}
              type="text"
            />
            <input
              className="text-black"
              placeholder="Client Address"
              onChange={(e) => {
                Setaddress1(e.target.value);
              }}
              type="text"
            />
            <input
              className="text-black"
              placeholder="City,State,Pincode"
              onChange={(e) => {
                SetAdress2(e.target.value);
              }}
              type="text"
            />
            <input
              className="text-black"
              placeholder="Client Country"
              onChange={(e) => {
                Setcountry(e.target.value);
              }}
              type="text"
            />
          </form>
        </div>
        <PDFViewer>
          <PDFGen
            companyName={companyName}
            address1={address1}
            address2={address2}
            companyCountry={companyCountry}
          />
        </PDFViewer>
        <PDFDownloadLink
          fileName="Invoice"
          document={
            <PDFGen
              companyName={companyName}
              address1={address1}
              address2={address2}
              companyCountry={companyCountry}
            />
          }
        >
          {({ loading }) => (
            <Button>{loading ? "Loading" : "Download "}</Button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Invoices;
