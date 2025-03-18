import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print'; // Import react-to-print

const Mreoport = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pet } = location.state || {}; // Get pet data from navigation state

    const [medicalDetails, setMedicalDetails] = useState(pet?.medicalHistory || "");

    // Ref for the form to be printed
    const componentRef = useRef();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Medical details saved successfully!");
        navigate("/clinic/animals"); // Navigate back to the animals list
    };

    // Handle PDF print
    const handlePrint = useReactToPrint({
        content: () => componentRef.current, // Reference to the form content
        documentTitle: `MedicalDetails_${pet?.name}`, // PDF file name
    });

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Medical Details for {pet?.name}</h2>
            <form onSubmit={handleSubmit} style={styles.form} ref={componentRef}>
                <label style={styles.label}>
                    Medical History:
                    <textarea
                        value={medicalDetails}
                        onChange={(e) => setMedicalDetails(e.target.value)}
                        style={styles.textarea}
                        required
                    />
                </label>
                <button type="submit" style={styles.submitButton}>
                    Save Details
                </button>
            </form>

            {/* Print PDF Button */}
            <button onClick={handlePrint} style={styles.printButton}>
                Print PDF
            </button>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '24px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '16px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    label: {
        fontSize: '16px',
        color: '#4a5568',
    },
    textarea: {
        width: '100%',
        height: '150px',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #cbd5e0',
        marginTop: '8px',
    },
    submitButton: {
        backgroundColor: '#48bb78',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
    printButton: {
        backgroundColor: '#4299e1',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '16px',
        width: '100%',
    },
};

export default Mreoport;