import React from 'react';
import whatsappIcon from '../assets/whatsapp-icon.png';

// Public folder logo — accessed via URL path
const ERENGENTO_LOGO = '/ereganto-logo.jpeg';

const SHOP_DETAILS = {
    name: "SHREE SHYAM MOTORS",
    address: "Opp. to Bhagwati Furniture, Chalisgaon Road, Kannad 431103.",
    mobile: "+91 9421685385",
    gstin: "27CKZPA0590E1Z0",
    hsn: "87116010",
    email: ""
};

// Orange-black theme colors
const THEME = {
    primary: '#FB923C',       // light vibrant orange
    primaryLight: '#FED7AA',  // very light pastel orange
    headerBg: '#1a1a1a',      // near black
    accentBorder: '#FB923C',  // orange border
    tableBg: '#FFF7ED',       // very light orange tint
    totalBg: '#FED7AA',       // soft light orange for total row
    totalText: '#1a1a1a',     // crisp dark text for readability
};

const ErengentoInvoice = React.forwardRef(({ data }, ref) => {
    const {
        billType = 'tax_invoice',
        bookingAmount = 0,
        customerName,
        mobileNumber,
        address,
        customerGst,
        customerPan,
        vehicleModel,
        chassisNo,
        motorNo,
        batteryNo,
        chargerNo,
        color,
        price,
        gstType = 'cgst_sgst',
        date,
        invoiceNumber
    } = data || {};

    const formattedDate = date ? new Date(date).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }) : '';

    const basePrice = parseFloat(price) || 0;
    let cgst = 0, sgst = 0, igst = 0;

    if (gstType === 'cgst_sgst') {
        cgst = basePrice * 0.025;
        sgst = basePrice * 0.025;
    } else {
        igst = basePrice * 0.05;
    }

    const totalGst = cgst + sgst + igst;
    const totalAmount = basePrice + totalGst;
    const bookingAdvance = parseFloat(bookingAmount) || 0;
    const balanceAmount = totalAmount - bookingAdvance;

    const numberToWords = (num) => {
        const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ',
            'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
        const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        const convert = (n) => {
            if (n === 0) return '';
            if (n < 20) return a[n];
            if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + a[n % 10] : '');
            if (n < 1000) return a[Math.floor(n / 100)] + 'Hundred ' + (n % 100 !== 0 ? convert(n % 100) : '');
            if (n < 100000) return convert(Math.floor(n / 1000)) + 'Thousand ' + (n % 1000 !== 0 ? ' ' + convert(n % 1000) : '');
            if (n < 10000000) return convert(Math.floor(n / 100000)) + 'Lakh ' + (n % 100000 !== 0 ? ' ' + convert(n % 100000) : '');
            return convert(Math.floor(n / 10000000)) + 'Crore ' + (n % 10000000 !== 0 ? ' ' + convert(n % 10000000) : '');
        };
        const whole = Math.floor(num);
        const fraction = Math.round((num - whole) * 100);
        if (whole === 0 && fraction === 0) return 'Zero Rupees Only';
        let res = '';
        if (whole > 0) res = convert(whole) + 'Rupees ';
        if (fraction > 0) res += (whole > 0 ? 'and ' : '') + convert(fraction) + 'Paise ';
        return res + 'Only';
    };

    return (
        <div ref={ref} className="bg-white text-slate-900 font-sans box-border h-full flex flex-col justify-between"
            style={{ padding: '16px' }}>

            {/* ═══ HEADER ═══ */}
            <div>
                {/* Top bar — orange stripe */}
                <div style={{ backgroundColor: THEME.primary, height: '5px', borderRadius: '2px', marginBottom: '8px' }} />

                <div style={{ borderBottom: `3px solid ${THEME.headerBg}`, paddingBottom: '6px', marginBottom: '10px' }}>
                    <div className="flex items-center justify-between gap-3">

                        {/* Left: ereganto Logo */}
                        <div className="flex-shrink-0">
                            <img
                                src={ERENGENTO_LOGO}
                                alt="ereganto"
                                style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Center: Shop Name & Address */}
                        <div className="flex-1 text-center">
                            <h1 className="font-black font-serif uppercase leading-tight tracking-wide mb-0.5"
                                style={{ fontSize: '26px', color: THEME.primary }}>
                                {SHOP_DETAILS.name}
                            </h1>
                            {/* Orange underline accent */}
                            <div style={{ height: '2px', backgroundColor: THEME.primary, width: '60%', margin: '2px auto 4px' }} />
                            <p className="text-slate-700 leading-tight max-w-md mx-auto" style={{ fontSize: '10.5px' }}>
                                {SHOP_DETAILS.address}
                            </p>
                            <p className="text-gray-700 mt-0.5" style={{ fontSize: '9.5px' }}>
                                <span className="font-bold">GSTIN:</span> {SHOP_DETAILS.gstin}
                            </p>
                            <p className="font-semibold tracking-wider mt-0.5 uppercase"
                                style={{ fontSize: '8.5px', color: THEME.primary, letterSpacing: '1.5px' }}>
                                Authorised ereganto Dealer
                            </p>
                        </div>

                        {/* Right: Invoice Details */}
                        <div className="flex-shrink-0 text-right">
                            <div style={{
                                backgroundColor: THEME.headerBg,
                                color: '#fff',
                                padding: '3px 8px',
                                borderRadius: '3px',
                                marginBottom: '5px',
                                fontSize: '10px',
                                fontWeight: '900',
                                letterSpacing: '1px',
                            }}>
                                {billType === 'booking_receipt' ? 'BOOKING RECEIPT' : 'TAX INVOICE'}
                            </div>
                            <div className="text-gray-700 space-y-0.5 font-medium" style={{ fontSize: '10.5px' }}>
                                <p><span className="font-bold">Date:</span> {formattedDate}</p>
                                <p>
                                    <span className="font-bold">
                                        {billType === 'booking_receipt' ? 'Receipt No:' : 'Invoice No:'}
                                    </span> {invoiceNumber || 'INV-0001'}
                                </p>
                                <p><span className="font-semibold">Pro Dinesh Agrawal</span></p>
                                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
                                    <img src={whatsappIcon} alt="WhatsApp" width="15" height="15"
                                        style={{ flexShrink: 0 }} />
                                    <span>{SHOP_DETAILS.mobile}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ═══ CUSTOMER DETAILS ═══ */}
                <div className="mb-3 bg-white p-3 rounded-lg"
                    style={{ border: `2px solid ${THEME.headerBg}` }}>
                    <h3 className="font-bold text-slate-900 mb-2 pb-1 uppercase"
                        style={{ fontSize: '13px', borderBottom: `2px solid ${THEME.primary}` }}>
                        Details of Customer
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-medium"><span className="font-bold text-gray-900">Name:</span> {customerName}</p>
                            <p className="font-medium"><span className="font-bold text-gray-900">Mobile:</span> {mobileNumber}</p>
                            {customerGst && (
                                <p className="font-medium">
                                    <span className="font-bold text-gray-900">GSTIN:</span>{' '}
                                    <span className="uppercase">{customerGst}</span>
                                </p>
                            )}
                        </div>
                        <div>
                            <p className="font-medium"><span className="font-bold text-gray-900">Address:</span> {address}</p>
                            {customerPan && (
                                <p className="font-medium">
                                    <span className="font-bold text-gray-900">PAN:</span>{' '}
                                    <span className="uppercase">{customerPan}</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* ═══ PRODUCT TABLE ═══ */}
                <div className="mb-3">
                    {billType === 'booking_receipt' ? (
                        <table className="w-full border-collapse text-sm" style={{ border: `2px solid ${THEME.headerBg}` }}>
                            <thead>
                                <tr style={{ backgroundColor: THEME.headerBg, color: '#fff' }}>
                                    <th className="p-2 font-black text-left"
                                        style={{ borderRight: `1px solid ${THEME.primary}` }}>Description of Goods (Model)</th>
                                    <th className="p-2 text-right w-32 font-black"
                                        style={{ borderRight: `1px solid ${THEME.primary}` }}>Total Amount (₹)</th>
                                    <th className="p-2 text-right w-36 font-black"
                                        style={{ borderRight: `1px solid ${THEME.primary}` }}>Booking Advance Paid (₹)</th>
                                    <th className="p-2 text-right w-32 font-black">Balance Amount (₹)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr>
                                    <td className="p-2 align-top" style={{ borderRight: `1px solid #ddd`, borderBottom: `1px solid #ddd` }}>
                                        <p className="font-bold text-slate-900">
                                            {vehicleModel?.toUpperCase()}{color ? ` - ${color.toUpperCase()}` : ''}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1 italic">Electric Scooter (Low-Speed) Two-Wheeler</p>
                                    </td>
                                    <td className="p-2 text-right align-top font-semibold"
                                        style={{ borderRight: `1px solid #ddd`, borderBottom: `1px solid #ddd` }}>
                                        {totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                    <td className="p-2 text-right align-top font-semibold"
                                        style={{ borderRight: `1px solid #ddd`, borderBottom: `1px solid #ddd` }}>
                                        {bookingAdvance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                    <td className="p-2 text-right align-top font-semibold"
                                        style={{ borderBottom: `1px solid #ddd` }}>
                                        {balanceAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr style={{ backgroundColor: '#FFF3E0' }}>
                                    <td colSpan="4" className="p-2 text-left"
                                        style={{ borderTop: `2px solid ${THEME.primary}` }}>
                                        <span className="font-bold">Booking Amount in Words: </span>
                                        <span className="italic uppercase text-xs">{numberToWords(bookingAdvance)}</span>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    ) : (
                        <table className="w-full border-collapse text-sm" style={{ border: `2px solid ${THEME.headerBg}` }}>
                            <thead>
                                <tr style={{ backgroundColor: THEME.headerBg, color: '#fff' }}>
                                    <th className="p-2 text-center w-10 font-black"
                                        style={{ borderRight: `1px solid ${THEME.primary}` }}>Sr.</th>
                                    <th className="p-2 font-black text-left"
                                        style={{ borderRight: `1px solid ${THEME.primary}` }}>Description of Goods</th>
                                    <th className="p-2 text-center w-24 font-black"
                                        style={{ borderRight: `1px solid ${THEME.primary}` }}>HSN Code</th>
                                    <th className="p-2 text-center w-12 font-black"
                                        style={{ borderRight: `1px solid ${THEME.primary}` }}>Qty</th>
                                    <th className="p-2 text-right w-28 font-black"
                                        style={{ borderRight: `1px solid ${THEME.primary}` }}>Rate (₹)</th>
                                    <th className="p-2 text-right w-28 font-black">Amount (₹)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr>
                                    <td className="p-2 text-center align-top font-semibold"
                                        style={{ borderRight: `1px solid #ddd`, borderBottom: `1px solid #ddd` }}>1</td>
                                    <td className="p-2 align-top"
                                        style={{ borderRight: `1px solid #ddd`, borderBottom: `1px solid #ddd` }}>
                                        <p className="font-bold text-slate-900">
                                            {vehicleModel?.toUpperCase()} - {color?.charAt(0).toUpperCase() + color?.slice(1).toLowerCase()}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1 italic">Electric Scooter (Low-Speed) Two-Wheeler</p>
                                        <div className="mt-2 text-xs text-slate-800 space-y-0.5 font-medium">
                                            {chassisNo && <p><span className="font-bold">Chassis No:</span> {chassisNo}</p>}
                                            {motorNo && <p><span className="font-bold">Motor No:</span> {motorNo}</p>}
                                            {batteryNo && <p><span className="font-bold">Battery No:</span> {batteryNo}</p>}
                                            {chargerNo && <p><span className="font-bold">Charger No:</span> {chargerNo}</p>}
                                        </div>
                                    </td>
                                    <td className="p-2 text-center align-top font-semibold"
                                        style={{ borderRight: `1px solid #ddd`, borderBottom: `1px solid #ddd` }}>
                                        {SHOP_DETAILS.hsn}
                                    </td>
                                    <td className="p-2 text-center align-top font-semibold"
                                        style={{ borderRight: `1px solid #ddd`, borderBottom: `1px solid #ddd` }}>1</td>
                                    <td className="p-2 text-right align-top font-semibold"
                                        style={{ borderRight: `1px solid #ddd`, borderBottom: `1px solid #ddd` }}>
                                        {basePrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                    <td className="p-2 text-right align-top font-semibold"
                                        style={{ borderBottom: `1px solid #ddd` }}>
                                        {basePrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                {/* Taxable Amount */}
                                <tr style={{ backgroundColor: '#FFF3E0' }}>
                                    <td colSpan="5" className="p-2 text-right font-bold"
                                        style={{ borderTop: `1px solid #ddd`, borderBottom: `1px solid #ddd`, borderRight: `1px solid #ddd` }}>
                                        Taxable Amount (₹)
                                    </td>
                                    <td className="p-2 text-right font-bold"
                                        style={{ borderTop: `1px solid #ddd`, borderBottom: `1px solid #ddd` }}>
                                        {basePrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                </tr>
                                {gstType === 'cgst_sgst' ? (
                                    <>
                                        <tr style={{ backgroundColor: '#FFF3E0' }}>
                                            <td colSpan="5" className="p-2 text-right font-bold"
                                                style={{ borderBottom: `1px solid #ddd`, borderRight: `1px solid #ddd` }}>
                                                CGST @ 2.5% (₹)
                                            </td>
                                            <td className="p-2 text-right font-bold"
                                                style={{ borderBottom: `1px solid #ddd` }}>
                                                {cgst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#FFF3E0' }}>
                                            <td colSpan="5" className="p-2 text-right font-bold"
                                                style={{ borderBottom: `1px solid #ddd`, borderRight: `1px solid #ddd` }}>
                                                SGST @ 2.5% (₹)
                                            </td>
                                            <td className="p-2 text-right font-bold"
                                                style={{ borderBottom: `1px solid #ddd` }}>
                                                {sgst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </td>
                                        </tr>
                                    </>
                                ) : (
                                    <tr style={{ backgroundColor: '#FFF3E0' }}>
                                        <td colSpan="5" className="p-2 text-right font-bold"
                                            style={{ borderBottom: `1px solid #ddd`, borderRight: `1px solid #ddd` }}>
                                            IGST @ 5% (₹)
                                        </td>
                                        <td className="p-2 text-right font-bold"
                                            style={{ borderBottom: `1px solid #ddd` }}>
                                            {igst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </td>
                                    </tr>
                                )}
                                {/* Total Row — Light Orange */}
                                <tr style={{ backgroundColor: THEME.totalBg, color: THEME.totalText }}>
                                    <td colSpan="5" className="p-3 text-right font-black text-base"
                                        style={{ borderRight: '1px solid #ddd' }}>Total Amount (₹)</td>
                                    <td className="p-3 text-right font-black text-base">
                                        {totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                </tr>
                                {/* Words row */}
                                <tr style={{ backgroundColor: '#FFF3E0' }}>
                                    <td colSpan="6" className="p-2 text-left"
                                        style={{ borderTop: `2px solid ${THEME.primary}` }}>
                                        <span className="font-bold">Total Amount in Words: </span>
                                        <span className="italic uppercase text-xs">{numberToWords(totalAmount)}</span>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    )}
                    {billType !== 'booking_receipt' && (
                        <p className="text-xs text-gray-500 mt-1 italic">* GST calculated as per selected type.</p>
                    )}
                </div>
            </div>

            {/* ═══ FOOTER — TERMS & SIGNATURES ═══ */}
            <div className="mt-3">
                <div style={{ borderTop: `4px solid ${THEME.primary}`, paddingTop: '10px' }}>

                    {/* Terms & Conditions */}
                    <div className="text-xs text-gray-700 mb-3">
                        <h4 className="font-black mb-1 uppercase"
                            style={{ fontSize: '11px', color: THEME.headerBg }}>
                            Terms &amp; Conditions:
                        </h4>
                        <ol className="list-decimal list-inside space-y-0.5 font-medium" style={{ fontSize: '9.5px' }}>
                            <li>Goods once sold will not be taken back, exchanged, or refunded.</li>
                            <li>Motor &amp; Controller carry a warranty of 1 year. Battery &amp; Charger carry a warranty of 1 year.</li>
                            <li>Vehicle delivered in good condition; no claims regarding physical damage, accessories, or shortages will be entertained after delivery.</li>
                            <li>Customer must verify chassis number, motor number, model, colour, and invoice details before taking delivery.</li>
                            <li>Warranty is provided solely by the manufacturer. Shree Shyam Enterprises shall not be liable for warranty claims.</li>
                            <li>Regular servicing at the prescribed intervals is mandatory to maintain warranty validity.</li>
                            <li>Warranty is void if the vehicle is modified, tampered with, misused, overloaded, involved in an accident, repaired by unauthorized persons, or damaged due to water ingress, fire, or natural calamities.</li>
                            <li>Maximum Speed: 25 km/h. Any modification or tampering is at the customer's risk. Shree Shyam Enterprises shall not be liable.</li>
                            <li>Any service, fitting, inspection, or repair work carried out shall attract labour charges as per prevailing rates.</li>
                            <li>Delivery is deemed complete upon the customer's signature on this delivery note/invoice.</li>
                        </ol>
                    </div>

                    {/* Signatures */}
                    <div className="flex justify-between items-end mt-3">
                        <div className="text-left">
                            <div className="h-14 mb-1 w-44"
                                style={{ borderBottom: `2px dashed ${THEME.primary}` }} />
                            <p className="font-bold text-sm text-slate-900">Customer Signature</p>
                            <p className="text-xs text-gray-600 font-semibold">Date: {formattedDate}</p>
                        </div>
                        <div className="text-right">
                            <div className="h-14 mb-1 w-44"
                                style={{ borderBottom: `2px dashed ${THEME.headerBg}` }} />
                            <p className="font-bold text-sm text-slate-900">Authorized Signatory</p>
                            <p className="text-xs text-gray-600 font-semibold">{SHOP_DETAILS.name}</p>
                            <p className="text-xs text-gray-600 font-semibold">(Pro Dinesh Agrawal)</p>
                        </div>
                    </div>

                    {/* Bottom orange stripe */}
                    <div style={{ backgroundColor: THEME.primary, height: '4px', borderRadius: '2px', marginTop: '10px' }} />
                </div>
            </div>
        </div>
    );
});

export default React.memo(ErengentoInvoice);
