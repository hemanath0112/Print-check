import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Printer, Package, Info } from 'lucide-react';
import PrintableLabel from './components/PrintableLabel';

function App() {
  const componentRef = useRef();
  
  const [formData, setFormData] = useState({
    recipientName: 'Alice Smith',
    address: '789 Birch Road Apt 4B',
    city: 'Exampleville',
    zip: '98765',
    phone: '555-0100',
    trackingNumber: 'TRK-' + Math.floor(Math.random() * 10000000000)
  });

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Zebra_ZD220_Label',
    onAfterPrint: () => console.log('Print success'),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="app-container">
      {/* <header className="header">
        <h1>Label Print Studio</h1>
        <p><Package size={20} /> Optimized for ZDesigner ZD220-203dpi (100x150mm)</p>
      </header> */}

      <main className="main-content">
        <section className="form-panel">
          <h2>Recipient Details</h2>
          
          <div className="form-group">
            <label>Name</label>
            <input 
              className="form-control" 
              name="recipientName"
              value={formData.recipientName} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label>Addresss</label>
            <input 
              className="form-control" 
              name="address"
              value={formData.address} 
              onChange={handleChange} 
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 2 }}>
              <label>City</label>
              <input 
                className="form-control" 
                name="city"
                value={formData.city} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>ZIP</label>
              <input 
                className="form-control" 
                name="zip"
                value={formData.zip} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input 
              className="form-control" 
              name="phone"
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>

          <button className="btn-print" onClick={handlePrint} type="button">
            <Printer size={24} />
            Print Label
          </button>

          <div className="info-box">
            <strong><Info size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Setup Instructions:</strong>
            1. Ensure your Zebra ZD220 is installed with the ZDesigner Driver. <br/>
            2. Click "Print Label" above.<br/>
            3. In the browser print dialog, select the <b>ZDesigner ZD220-203dpi</b> printer.<br/>
            4. Ensure Paper Size is set to <b>100mm x 150mm</b> (or 4" x 6").<br/>
            5. Margins must be set to <i>None</i> and Scaling to <i>Default</i>.
          </div>
        </section>

        <section className="preview-panel">
          <div className="preview-title">
            <Printer size={20} /> Live Preview (100x150 mm)
          </div>
          
          {/* Printable Label Component */}
          <PrintableLabel 
            ref={componentRef}
            {...formData} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;
