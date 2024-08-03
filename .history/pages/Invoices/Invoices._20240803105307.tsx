// @ts-nocheck
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFGen from "./PDFGen";
import { Button } from "@mui/material";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./invoices.css";

const Invoices = () => {
  const [companyName, setcompanyName] = useState("");
  const [companyaddress1, setcompanyaddress1] = useState("");
  const [companyaddress2, setcompanyaddress2] = useState("");
  const [companyCountry, setcompanyCountry] = useState("");
  const [clientName, setclientName] = useState("");
  const [clientaddress1, setclientaddress1] = useState("");
  const [clientaddress2, setclientaddress2] = useState("");
  const [clientCountry, setclientCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [tnc, setTnc] = useState("");
  const [invoiceDate, setinvoiceDate] = useState(new Date());
  const [dueDate, setdueDate] = useState(new Date());
  const [invoiceNumber, setinvoiceNumber] = useState("");
  const [items, setItems] = useState([]);
  const [Idesc, setIdesc] = useState("");
  const [Qty, setQty] = useState("");
  const [rate, setrate] = useState("");
  const [Amount, setAmount] = useState("");

  const addItem = () => {
    setItems([
      ...items,
      <p key={items.length}>
        {
          <div className="pdmg item flex-">
            <h1>Item Details</h1>
            <div className="flex">
              <h1>Item Description</h1>
              <input
                onChange={(e) => {
                  setIdesc(e.target.value);
                }}
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex">
              <h1>quantity</h1>
              <input
                onChange={(e) => {
                  setQty(e.target.value);
                }}
                type="number"
                placeholder=""
              />
            </div>
            <div className="flex">
              <h1>Rate</h1>
              <input
                onChange={(e) => {
                  setrate(e.target.value);
                }}
                type="rate"
                placeholder=""
              />
            </div>
            <div className="flex">
              <h1>Amount</h1>
              <input
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                type="amount"
                placeholder=""
              />
            </div>
          </div>
        }
      </p>,
    ]);
  };

  return (
    <div className="pdmg containerr">
      <div className="pdmg boxx">
        <h1 className="pdmg underline igen ">Invoice Generator</h1>
        <div className="toolTip">
          Note:the add item and pdf preview box feature might be buggy. We are
          working to fix it{" "}
        </div>
        <h2>
          Enter the details then click on download to download the PDF.You can
          also view a preview on the PDF in the preview box below
        </h2>
        <PDFDownloadLink
          fileName="Invoice"
          document={
            <PDFGen
              companyName={companyName}
              address1={companyaddress1}
              address2={companyaddress2}
              companyCountry={companyCountry}
              clientName={clientName}
              address1={clientaddress1}
              address2={clientaddress2}
              clientCountry={clientCountry}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
              invoiceNumber={invoiceNumber}
              items={items}
              Idesc={Idesc}
              Qty={Qty}
              rate={rate}
              Amount={Amount}
              notes={notes}
              tnc={tnc}
            />
          }
        >
          {({ loading }) => (
            <Button class="download">
              {loading ? "Loading" : "Download PDF"}
            </Button>
          )}
        </PDFDownloadLink>
        <div className="pdmg invoice-details pdmg">
          <form action="">
            <div className="flex">
              <h1>Invoice Number : </h1>
              <input
                className="text-black"
                placeholder="Invoice Number"
                onChange={(e) => {
                  setinvoiceNumber(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="invoice-dates flex">
              <h1>Invoice Date : </h1>
              <DatePicker
                selected={invoiceDate}
                onChange={(date) => setinvoiceDate(date)}
              />
            </div>
            <div className="invoice-dates flex">
              <h1>Due Date : </h1>
              <DatePicker
                selected={dueDate}
                onChange={(date) => setdueDate(date)}
              />
            </div>
          </form>
        </div>
        <div className="pdmg company-details pdmg flex">
          <h1>Company Details</h1>
          <form action="">
            <div className="flex">
              <h1></h1>
              <input
                className="text-black"
                placeholder="Company Name"
                onChange={(e) => {
                  setcompanyName(e.target.value);
                }}
                type="text"
              />
            </div>

            <div className="flex">
              <h1></h1>
              <input
                className="text-black"
                placeholder="Company Address"
                onChange={(e) => {
                  setcompanyaddress1(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="flex">
              <h1></h1>
              <input
                className="text-black"
                placeholder="City,State,Pincode"
                onChange={(e) => {
                  setcompanyaddress2(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="flex">
              <h1></h1>{" "}
              <input
                className="text-black"
                placeholder="Company Country"
                onChange={(e) => {
                  setcompanyCountry(e.target.value);
                }}
                type="text"
              />
            </div>
          </form>
        </div>
        <div className="pdmg client-details pdmg flex">
          <h1>Client Details</h1>
          <form action="">
            <div className="flex">
              <h1></h1>
              <input
                className="text-black"
                placeholder="client Name"
                onChange={(e) => {
                  setclientName(e.target.value);
                }}
                type="text"
              />
            </div>

            <div className="flex">
              <h1></h1>
              <input
                className="text-black"
                placeholder="client Address"
                onChange={(e) => {
                  setclientaddress1(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="flex">
              <h1></h1>
              <input
                className="text-black"
                placeholder="City,State,Pincode"
                onChange={(e) => {
                  setclientaddress2(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="flex">
              <h1></h1>{" "}
              <input
                className="text-black"
                placeholder="client Country"
                onChange={(e) => {
                  setclientCountry(e.target.value);
                }}
                type="text"
              />
            </div>
          </form>
        </div>
        <div className="pdmg item flex-">
          <h1>Item Details</h1>
          <div className="flex">
            <h1>Item Description</h1>
            <input
              onChange={(e) => {
                setIdesc(e.target.value);
              }}
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex">
            <h1>quantity</h1>
            <input
              onChange={(e) => {
                setQty(e.target.value);
              }}
              type="number"
              placeholder=""
            />
          </div>
          <div className="flex">
            <h1>Rate</h1>
            <input
              onChange={(e) => {
                setrate(e.target.value);
              }}
              type="rate"
              placeholder=""
            />
          </div>
          <div className="flex">
            <h1>Amount</h1>
            <input
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              type="amount"
              placeholder=""
            />
          </div>
        </div>
        <div className="pdmg Footers"></div>
        <div>
          {items.map((item) => item)}
          <button className="border add-item" onClick={addItem}>
            Add Item
          </button>
        </div>
        <div className="pdmg flex">
          <h1>Notes</h1>
          <input
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            type="text"
            placeholder="Notes"
          />
        </div>
        <div className="pdmg flex">
          <h1>Terms & Conditions</h1>
          <input
            onChange={(e) => {
              setTnc(e.target.value);
            }}
            type="text"
            placeholder="Enter Tnc"
          />
        </div>
        <div className="pdfview">
          <h1 style={{ textAlign: "center" }}>PDF Preview Box</h1>
          <PDFViewer>
            <PDFGen
              companyName={companyName}
              companyaddress1={companyaddress1}
              companyaddress2={companyaddress2}
              companyCountry={companyCountry}
              clientName={clientName}
              clientaddress1={clientaddress1}
              clientaddress2={clientaddress2}
              clientCountry={clientCountry}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
              invoiceNumber={invoiceNumber}
              items={items}
              Idesc={Idesc}
              Qty={Qty}
              rate={rate}
              Amount={Amount}
              notes={notes}
              tnc={tnc}
            />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
