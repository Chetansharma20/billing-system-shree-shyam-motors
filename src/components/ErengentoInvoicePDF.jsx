import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

// Shop Details
const SHOP_DETAILS = {
    name: "SHREE SHYAM MOTORS",
    address: "Opp. to Bhagwati Furniture, Chalisgaon Road, Kannad 431103.",
    mobile: "+91 9421685385",
    gstin: "27CKZPA0590E1Z0",
    hsn: "87116010",
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        fontSize: 10,
    },
    // ── Header ──
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderBottomColor: '#1a1a1a',
        paddingBottom: 8,
        marginBottom: 10,
        alignItems: 'flex-start',
    },
    logoContainer: {
        width: 80,
        height: 70,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoPlaceholder: {
        fontSize: 7,
        color: '#aaaaaa',
        textAlign: 'center',
    },
    logo: {
        width: 70,
        height: 70,
        objectFit: 'contain',
    },
    shopDetails: {
        flex: 1,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    shopName: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Times-Roman',
        color: '#1a1a1a',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 2,
    },
    shopNameAccent: {
        height: 2,
        backgroundColor: '#E65100',
        marginBottom: 4,
        width: '60%',
    },
    shopAddress: {
        fontSize: 9,
        color: '#000000',
        marginBottom: 2,
    },
    shopGst: {
        fontSize: 8,
        color: '#000000',
        marginBottom: 2,
    },
    dealerTag: {
        fontSize: 8,
        color: '#E65100',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    invoiceDetails: {
        width: 120,
        textAlign: 'right',
    },
    invoiceText: {
        fontSize: 9,
        color: '#000000',
        marginBottom: 2,
    },
    boldText: {
        fontWeight: 700,
    },
    // ── Customer ──
    customerSection: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000000',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: '#111827',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingBottom: 4,
        marginBottom: 8,
        textTransform: 'uppercase',
    },
    customerGrid: { flexDirection: 'row' },
    customerCol: { flex: 1 },
    customerRow: { fontSize: 9, marginBottom: 3, color: '#000000' },
    // ── Table ──
    table: { marginBottom: 10 },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#1a1a1a',
        borderWidth: 2,
        borderColor: '#1a1a1a',
    },
    tableHeaderCell: {
        padding: 6,
        fontWeight: 900,
        fontSize: 9,
        color: '#ffffff',
        borderRightWidth: 1,
        borderRightColor: '#E65100',
    },
    tableRow: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#000000',
    },
    tableCell: {
        padding: 6,
        fontSize: 9,
        borderRightWidth: 1,
        borderRightColor: '#000000',
    },
    tableCellSr: { width: '6%', textAlign: 'center' },
    tableCellDesc: { width: '34%' },
    tableCellHsn: { width: '12%', textAlign: 'center' },
    tableCellQty: { width: '8%', textAlign: 'center' },
    tableCellRate: { width: '20%', textAlign: 'right' },
    tableCellAmount: { width: '20%', textAlign: 'right', borderRightWidth: 0 },
    bookingCellDesc: { width: '40%' },
    bookingCellTotal: { width: '20%', textAlign: 'right' },
    bookingCellAdvance: { width: '20%', textAlign: 'right' },
    bookingCellBalance: { width: '20%', textAlign: 'right', borderRightWidth: 0 },
    // ── Footer rows ──
    footerRow: {
        flexDirection: 'row',
        backgroundColor: '#F1F5F9',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#000000',
    },
    footerLabel: {
        width: '80%',
        padding: 6,
        textAlign: 'right',
        fontWeight: 700,
        fontSize: 9,
        borderRightWidth: 1,
        borderRightColor: '#000000',
    },
    footerValue: {
        width: '20%',
        padding: 6,
        textAlign: 'right',
        fontWeight: 700,
        fontSize: 9,
    },
    totalRow: {
        flexDirection: 'row',
        backgroundColor: '#E65100',
        borderWidth: 2,
        borderColor: '#1a1a1a',
    },
    totalLabel: {
        width: '80%',
        padding: 8,
        textAlign: 'right',
        fontWeight: 900,
        fontSize: 11,
        color: '#ffffff',
        borderRightWidth: 1,
        borderRightColor: '#ffffff',
    },
    totalValue: {
        width: '20%',
        padding: 8,
        textAlign: 'right',
        fontWeight: 900,
        fontSize: 11,
        color: '#ffffff',
    },
    wordsRow: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: '#000000',
        padding: 6,
    },
    wordsText: {
        fontSize: 8,
        textTransform: 'uppercase',
        fontStyle: 'italic',
    },
    gstNote: {
        fontSize: 8,
        color: '#000000',
        fontStyle: 'italic',
        marginTop: 4,
    },
    // ── Terms ──
    termsSection: {
        borderTopWidth: 3,
        borderTopColor: '#E65100',
        paddingTop: 10,
        marginTop: 10,
    },
    termsTitle: {
        fontSize: 10,
        fontWeight: 900,
        color: '#111827',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    termItem: {
        fontSize: 8,
        color: '#000000',
        marginBottom: 2,
    },
    // ── Signatures ──
    signaturesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    signatureBox: { width: 150 },
    signatureLine: {
        borderBottomWidth: 1,
        borderBottomStyle: 'dashed',
        borderBottomColor: '#000000',
        height: 40,
        marginBottom: 4,
    },
    signatureLabel: { fontSize: 9, fontWeight: 700, color: '#111827' },
    signatureSubLabel: { fontSize: 8, color: '#000000' },
    vehicleDetails: { marginTop: 6, fontSize: 8, color: '#000000' },
    vehicleRow: { marginBottom: 2 },
});

// ── Helpers ──
const numberToWords = (num) => {
    const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
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

const fmt = (num) => num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ── Component ──
const ErengentoInvoicePDF = ({ data, logoBase64, whatsappBase64 }) => {
    const {
        billType = 'tax_invoice',
        bookingAmount = 0,
        customerName = '',
        mobileNumber = '',
        address = '',
        customerGst = '',
        customerPan = '',
        vehicleModel = '',
        chassisNo = '',
        motorNo = '',
        batteryNo = '',
        chargerNo = '',
        color = '',
        price = 0,
        gstType = 'cgst_sgst',
        date = '',
        invoiceNumber = 'INV-0001',
    } = data || {};

    const formattedDate = date ? new Date(date).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric',
    }) : '';

    const basePrice = parseFloat(price) || 0;
    let cgst = 0, sgst = 0, igst = 0;
    if (gstType === 'cgst_sgst') { cgst = basePrice * 0.025; sgst = basePrice * 0.025; }
    else { igst = basePrice * 0.05; }
    const totalAmount = basePrice + cgst + sgst + igst;
    const bookingAdvance = parseFloat(bookingAmount) || 0;
    const balanceAmount = totalAmount - bookingAdvance;

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* ── HEADER ── */}
                <View style={styles.header}>
                    {/* Logo — using public folder URL */}
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} src="/ereganto-logo.jpeg" />
                    </View>

                    {/* Shop Details */}
                    <View style={styles.shopDetails}>
                        <Text style={styles.shopName}>{SHOP_DETAILS.name}</Text>
                        <View style={{ height: 2, backgroundColor: '#E65100', width: '60%', alignSelf: 'center', marginBottom: 4 }} />
                        <Text style={styles.shopAddress}>{SHOP_DETAILS.address}</Text>
                        <Text style={styles.shopGst}>
                            <Text style={styles.boldText}>GSTIN: </Text>{SHOP_DETAILS.gstin}
                        </Text>
                        <Text style={styles.dealerTag}>Authorised ereganto Dealer</Text>
                    </View>

                    {/* Invoice Details */}
                    <View style={styles.invoiceDetails}>
                        <Text style={[styles.invoiceText, styles.boldText,
                            { borderBottomWidth: 1, borderBottomColor: '#000', paddingBottom: 2, marginBottom: 4,
                              backgroundColor: '#1a1a1a', color: '#fff', padding: 4, borderRadius: 2 }]}>
                            {billType === 'booking_receipt' ? 'BOOKING RECEIPT' : 'TAX INVOICE'}
                        </Text>
                        <Text style={styles.invoiceText}><Text style={styles.boldText}>Date: </Text>{formattedDate}</Text>
                        <Text style={styles.invoiceText}>
                            <Text style={styles.boldText}>{billType === 'booking_receipt' ? 'Receipt No: ' : 'Invoice No: '}</Text>
                            {invoiceNumber}
                        </Text>
                        <Text style={styles.invoiceText}>Pro Dinesh Agrawal</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 2 }}>
                            {whatsappBase64 && (
                                <Image style={{ width: 10, height: 9, marginRight: 3 }} src={whatsappBase64} />
                            )}
                            <Text style={{ fontSize: 10 }}>{SHOP_DETAILS.mobile}</Text>
                        </View>
                    </View>
                </View>

                {/* ── CUSTOMER DETAILS ── */}
                <View style={styles.customerSection}>
                    <Text style={styles.sectionTitle}>Details of Customer</Text>
                    <View style={styles.customerGrid}>
                        <View style={styles.customerCol}>
                            <Text style={styles.customerRow}><Text style={styles.boldText}>Name: </Text>{customerName}</Text>
                            <Text style={styles.customerRow}><Text style={styles.boldText}>Mobile: </Text>{mobileNumber}</Text>
                            {customerGst ? (
                                <Text style={styles.customerRow}><Text style={styles.boldText}>GSTIN: </Text>{customerGst.toUpperCase()}</Text>
                            ) : null}
                        </View>
                        <View style={styles.customerCol}>
                            <Text style={styles.customerRow}><Text style={styles.boldText}>Address: </Text>{address}</Text>
                            {customerPan ? (
                                <Text style={styles.customerRow}><Text style={styles.boldText}>PAN: </Text>{customerPan.toUpperCase()}</Text>
                            ) : null}
                        </View>
                    </View>
                </View>

                {/* ── PRODUCT TABLE ── */}
                <View style={styles.table}>
                    {billType === 'booking_receipt' ? (
                        <>
                            <View style={styles.tableHeader}>
                                <Text style={[styles.tableHeaderCell, styles.bookingCellDesc]}>Description of Goods (Model)</Text>
                                <Text style={[styles.tableHeaderCell, styles.bookingCellTotal]}>Total Amount (₹)</Text>
                                <Text style={[styles.tableHeaderCell, styles.bookingCellAdvance]}>Booking Advance Paid (₹)</Text>
                                <Text style={[styles.tableHeaderCell, styles.bookingCellBalance, { borderRightWidth: 0 }]}>Balance Amount (₹)</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={[styles.tableCell, styles.bookingCellDesc]}>
                                    <Text style={styles.boldText}>
                                        {vehicleModel?.toUpperCase()}{color ? ` - ${color.toUpperCase()}` : ''}
                                    </Text>
                                    <Text style={{ fontSize: 8, fontStyle: 'italic', marginTop: 2 }}>
                                        Electric Scooter (Low-Speed) Two-Wheeler
                                    </Text>
                                </View>
                                <Text style={[styles.tableCell, styles.bookingCellTotal]}>{fmt(totalAmount)}</Text>
                                <Text style={[styles.tableCell, styles.bookingCellAdvance]}>{fmt(bookingAdvance)}</Text>
                                <Text style={[styles.tableCell, styles.bookingCellBalance]}>{fmt(balanceAmount)}</Text>
                            </View>
                            <View style={styles.wordsRow}>
                                <Text style={styles.wordsText}>
                                    <Text style={styles.boldText}>Booking Amount in Words: </Text>
                                    {numberToWords(bookingAdvance)}
                                </Text>
                            </View>
                        </>
                    ) : (
                        <>
                            <View style={styles.tableHeader}>
                                <Text style={[styles.tableHeaderCell, styles.tableCellSr]}>Sr.</Text>
                                <Text style={[styles.tableHeaderCell, styles.tableCellDesc]}>Description of Goods</Text>
                                <Text style={[styles.tableHeaderCell, styles.tableCellHsn]}>HSN Code</Text>
                                <Text style={[styles.tableHeaderCell, styles.tableCellQty]}>Qty</Text>
                                <Text style={[styles.tableHeaderCell, styles.tableCellRate]}>Rate (₹)</Text>
                                <Text style={[styles.tableHeaderCell, styles.tableCellAmount, { borderRightWidth: 0 }]}>Amount (₹)</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCell, styles.tableCellSr]}>1</Text>
                                <View style={[styles.tableCell, styles.tableCellDesc]}>
                                    <Text style={styles.boldText}>
                                        {vehicleModel?.toUpperCase()} - {color?.charAt(0).toUpperCase() + color?.slice(1).toLowerCase()}
                                    </Text>
                                    <Text style={{ fontSize: 8, fontStyle: 'italic', marginTop: 2 }}>
                                        Electric Scooter (Low-Speed) Two-Wheeler
                                    </Text>
                                    <View style={styles.vehicleDetails}>
                                        {chassisNo ? <Text style={styles.vehicleRow}><Text style={styles.boldText}>Chassis No: </Text>{chassisNo}</Text> : null}
                                        {motorNo ? <Text style={styles.vehicleRow}><Text style={styles.boldText}>Motor No: </Text>{motorNo}</Text> : null}
                                        {batteryNo ? <Text style={styles.vehicleRow}><Text style={styles.boldText}>Battery No: </Text>{batteryNo}</Text> : null}
                                        {chargerNo ? <Text style={styles.vehicleRow}><Text style={styles.boldText}>Charger No: </Text>{chargerNo}</Text> : null}
                                    </View>
                                </View>
                                <Text style={[styles.tableCell, styles.tableCellHsn]}>{SHOP_DETAILS.hsn}</Text>
                                <Text style={[styles.tableCell, styles.tableCellQty]}>1</Text>
                                <Text style={[styles.tableCell, styles.tableCellRate]}>{fmt(basePrice)}</Text>
                                <Text style={[styles.tableCell, styles.tableCellAmount]}>{fmt(basePrice)}</Text>
                            </View>

                            {/* Taxable Amount */}
                            <View style={styles.footerRow}>
                                <Text style={styles.footerLabel}>Taxable Amount (₹)</Text>
                                <Text style={styles.footerValue}>{fmt(basePrice)}</Text>
                            </View>

                            {/* GST */}
                            {gstType === 'cgst_sgst' ? (
                                <>
                                    <View style={styles.footerRow}>
                                        <Text style={styles.footerLabel}>CGST @ 2.5% (₹)</Text>
                                        <Text style={styles.footerValue}>{fmt(cgst)}</Text>
                                    </View>
                                    <View style={styles.footerRow}>
                                        <Text style={styles.footerLabel}>SGST @ 2.5% (₹)</Text>
                                        <Text style={styles.footerValue}>{fmt(sgst)}</Text>
                                    </View>
                                </>
                            ) : (
                                <View style={styles.footerRow}>
                                    <Text style={styles.footerLabel}>IGST @ 5% (₹)</Text>
                                    <Text style={styles.footerValue}>{fmt(igst)}</Text>
                                </View>
                            )}

                            {/* Total */}
                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>Total Amount (₹)</Text>
                                <Text style={styles.totalValue}>{fmt(totalAmount)}</Text>
                            </View>

                            {/* Words */}
                            <View style={styles.wordsRow}>
                                <Text style={styles.wordsText}>
                                    <Text style={styles.boldText}>Total Amount in Words: </Text>
                                    {numberToWords(totalAmount)}
                                </Text>
                            </View>
                        </>
                    )}
                </View>

                {billType !== 'booking_receipt' && (
                    <Text style={styles.gstNote}>* GST calculated as per selected type.</Text>
                )}

                {/* ── TERMS & CONDITIONS ── */}
                <View style={styles.termsSection}>
                    <Text style={styles.termsTitle}>Terms &amp; Conditions:</Text>
                    <Text style={styles.termItem}>1. Goods once sold will not be taken back, exchanged, or refunded.</Text>
                    <Text style={styles.termItem}>2. Motor &amp; Controller carry a warranty of 1 year. Battery &amp; Charger carry a warranty of 1 year.</Text>
                    <Text style={styles.termItem}>3. Vehicle delivered in good condition; no claims regarding physical damage, accessories, or shortages will be entertained after delivery.</Text>
                    <Text style={styles.termItem}>4. Customer must verify chassis number, motor number, model, colour, and invoice details before taking delivery.</Text>
                    <Text style={styles.termItem}>5. Warranty is provided solely by the manufacturer. Shree Shyam Enterprises shall not be liable for warranty claims.</Text>
                    <Text style={styles.termItem}>6. Regular servicing at the prescribed intervals is mandatory to maintain warranty validity.</Text>
                    <Text style={styles.termItem}>7. Warranty is void if the vehicle is modified, tampered with, misused, overloaded, involved in an accident, repaired by unauthorized persons, or damaged due to water ingress, fire, or natural calamities.</Text>
                    <Text style={styles.termItem}>8. Maximum Speed: 25 km/h. Any modification or tampering is at the customer's risk. Shree Shyam Enterprises shall not be liable.</Text>
                    <Text style={styles.termItem}>9. Any service, fitting, inspection, or repair work carried out shall attract labour charges as per prevailing rates.</Text>
                    <Text style={styles.termItem}>10. Delivery is deemed complete upon the customer's signature on this delivery note/invoice.</Text>
                </View>

                {/* ── SIGNATURES ── */}
                <View style={styles.signaturesContainer}>
                    <View style={styles.signatureBox}>
                        <View style={styles.signatureLine}></View>
                        <Text style={styles.signatureLabel}>Customer Signature</Text>
                        <Text style={styles.signatureSubLabel}>Date: {formattedDate}</Text>
                    </View>
                    <View style={[styles.signatureBox, { alignItems: 'flex-end' }]}>
                        <View style={styles.signatureLine}></View>
                        <Text style={styles.signatureLabel}>Authorized Signatory</Text>
                        <Text style={styles.signatureSubLabel}>{SHOP_DETAILS.name}</Text>
                        <Text style={styles.signatureSubLabel}>(Pro Dinesh Agrawal)</Text>
                    </View>
                </View>

            </Page>
        </Document>
    );
};

export default ErengentoInvoicePDF;

