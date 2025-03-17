import React, { useState } from 'react';
import { Card, CardContent } from "@mui/material";
import { TextField as Input } from "@mui/material";
import { Button } from "@mui/material";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { Typography } from "antd";
const { Text: Label } = Typography;

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("credit_card");
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-white-500 to-white-500 p-4">
        <Card 
          className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl border border-gray-200 relative overflow-hidden"
        >
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: "url('/public/DogCats.jpeg')", 
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              filter: "blur(1px)" 
            }}
          ></div>
          <div className="relative z-10 p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Pet Adoption Payment</h2>
            <form className="space-y-6">
              <div>
                <Label className="block mb-2 text-gray-700">Full Name</Label>
                <Input type="text" placeholder="Enter your name" required className="w-full rounded-lg" />
              </div>
              <div>
                <Label className="block mb-2 text-gray-700">Adoption Fee</Label>
                <Input type="text" value="$50.00" disabled className="w-full bg-gray-200 rounded-lg" />
              </div>
              <div>
                <Label className="block mb-3 text-gray-700">Select Payment Method</Label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={paymentMethod === "credit_card" ? "contained" : "outlined"}
                    onClick={() => setPaymentMethod("credit_card")}
                    className="flex items-center gap-2 rounded-lg"
                  >
                    <FaCreditCard /> Credit Card
                  </Button>
                  <Button
                    type="button"
                    variant={paymentMethod === "paypal" ? "contained" : "outlined"}
                    onClick={() => setPaymentMethod("paypal")}
                    className="flex items-center gap-2 rounded-lg"
                  >
                    <FaPaypal /> PayPal
                  </Button>
                </div>
              </div>
              {paymentMethod === "credit_card" && (
                <div>
                  <Label className="block mb-2 text-gray-700">Card Details</Label>
                  <Input type="text" placeholder="Card Number" required className="w-full rounded-lg mb-3" />
                  <div className="flex gap-3">
                    <Input type="text" placeholder="MM/YY" required className="w-1/2 rounded-lg" />
                    <Input type="text" placeholder="CVC" required className="w-1/2 rounded-lg" />
                  </div>
                </div>
              )}
              <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold py-3 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                Pay
              </Button>
            </form>
          </div>
        </Card>
      </div>
    );
};
  
export default Payment;
