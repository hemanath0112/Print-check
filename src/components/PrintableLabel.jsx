import React, { forwardRef } from "react";
import "./PrintableLabel.css";

const PrintableLabel = forwardRef((props, ref) => {
  const { recipientName, address, city, zip, phone, trackingNumber } = props;

  return (
    <div className="label-wrapper" ref={ref}>
      <div className="label-container">
        <div className="label-header">
          <h2>PRIORITY MAIL</h2>
        </div>

        <div className="label-section sender-section">
          <strong>FROM:</strong>
          <p>My Awesome Store</p>
          <p>123 Commerce St</p>
          <p>Tech City, TX 75001</p>
        </div>

        <div className="label-section recipient-section">
          <strong>TO:</strong>
          <p className="large-text">{recipientName || "John Doe"}</p>
          <p>{address || "456 Main Avenue"}</p>
          <p>
            {city || "Sampletown"}, {zip || "12345"}
          </p>
          <p>Ph: {phone || "555-0198"}</p>
        </div>

        <div className="label-section barcode-section">
          <div className="barcode-placeholder">
            || ||| | || ||| || ||| | || |||
          </div>
          <p className="tracking-number">
            {trackingNumber || "TRK-9876543210"}
          </p>
        </div>

        <div className="label-footer">
          <p>ZDesigner ZD220-203dpi Standard Print</p>
          <p>Dims: 100x150 mm</p>
        </div>
      </div>
    </div>
  );
});

export default PrintableLabel;
