import React from "react";
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

require('dotenv').config(); // Loads .env file
// const Payment = () => {
//     return (
//     <div className="container">
//       <PaymentForm
//         applicationId=''
//         locationId=''
//         cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
//             console.log(token,"token");
//             console.log(verifiedBuyer,"verifiedBuyer");
//             const response = await fetch("localhost:3000/api/pay", {
//               method: "POST",
//               headers: {
//                 "Content-type": "application/json",
//               },
//               body: JSON.stringify({
//                 sourceId: token.token,
//               }),
//             });
//             console.log(await response.json());
//             const payments = Square.payments('sandbox-sq0idb-RT3u-HhCpNdbMiGg5aXuVg', 'TC4Z3ZEBKRXRH');
//                 const card = await payments.card();
//                 await card.attach('#card-container');

//                 const cardButton = document.getElementById('card-button');
//                 cardButton.addEventListener('click', async () => {
//                 const statusContainer = document.getElementById('payment-status-container');

//                 try {
//                     const result = await card.tokenize();
//                     if (result.status === 'OK') {
//                     console.log(`Payment token is ${result.token}`);
//                     statusContainer.innerHTML = "Payment Successful";
//                     } else {
//                     let errorMessage = `Tokenization failed with status: ${result.status}`;
//                     if (result.errors) {
//                         errorMessage += ` and errors: ${JSON.stringify(
//                         result.errors
//                         )}`;
//                     }

//                     throw new Error(errorMessage);
//                     }
//                 } catch (e) {
//                     console.error(e);
//                     statusContainer.innerHTML = "Payment Failed";
//                 }
//                 });
//           }}
//       >
        
//         <CreditCard
//           buttonProps={{
//             css: {
//               backgroundColor: "#E56B6F",
//               fontSize: "14px",
//               color: "#fff",
//               "&:hover": {
//                 backgroundColor: "#E56B6F",
//               },
//             },
            
//           }}
          
//         />
//         <form id="payment-form">
//           <div id="card-container"></div>
//           <button id="card-button" type="button">Pay $1.00</button>
//         </form>
//         <div id="payment-status-container"></div>
//       </PaymentForm>

//         <body>
//             <div id="payment-form">
//             <div id="payment-status-container"></div>
//             <div id="card-container"></div>
//             <button id="card-button" type="button">Pay</button>
//             </div>
//             <script type="module">
//                 const payments = Square.payments('sandbox-sq0idb-RT3u-HhCpNdbMiGg5aXuVg', 'TC4Z3ZEBKRXRH');
//                 const card = await payments.card();
//                 await card.attach('#card-container');

//                 const cardButton = document.getElementById('card-button');
//                 cardButton.addEventListener('click', async () => {
//                 const statusContainer = document.getElementById('payment-status-container');

//                 try {
//                     const result = await card.tokenize();
//                     if (result.status === 'OK') {
//                     console.log(`Payment token is ${result.token}`);
//                     statusContainer.innerHTML = "Payment Successful";
//                     } else {
//                     let errorMessage = `Tokenization failed with status: ${result.status}`;
//                     if (result.errors) {
//                         errorMessage += ` and errors: ${JSON.stringify(
//                         result.errors
//                         )}`;
//                     }

//                     throw new Error(errorMessage);
//                     }
//                 } catch (e) {
//                     console.error(e);
//                     statusContainer.innerHTML = "Payment Failed";
//                 }
//                 });
//             </script>
//             </body>
//     )
// }
const Payment = () => {
  return (
    <div className="container">
      <PaymentForm
        applicationId='sandbox-sq0idb-PbmycZtsMeeGiyJ5FABeqg'
        locationId='L66S7M0WJVVHM'
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
            console.log(token,"token");
            console.log(verifiedBuyer,"verifiedBuyer");
            const response = await fetch("localhost:3000/api/pay", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                sourceId: token.token,
              }),
            });
            console.log(await response.json());
          }}
      >
        
        <CreditCard
          buttonProps={{
            css: {
              backgroundColor: "#E56B6F",
              fontSize: "14px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#E56B6F",
              },
            },
            
          }}
          
        />
        <form id="payment-form">
          <div id="card-container"></div>
          <button id="card-button" type="button">Pay $1.00</button>
        </form>
        <div id="payment-status-container"></div>
      </PaymentForm>
    </div>
  );
};



// export function Heading2() {
//   return (
//     <script type="text/javascript" src="https://sandbox.web.squarecdn.com/v1/square.js">
//       {
//         const appId = '{YOUR_SANDBOX_APPLICATION_ID}';
//         const locationId = '{YOUR_SANDBOX_LOCATION_ID}';
//         async function initializeCard(payments) {
//           const card = await payments.card();
//           await card.attach('#card-container'); 
//           return card; 
//         }
      
//         document.addEventListener('DOMContentLoaded', async function () {
//           if (!window.Square) {
//             throw new Error('Square.js failed to load properly');
//           }
//           const payments = window.Square.payments(appId, locationId);
//           let card;
//           try {
//             card = await initializeCard(payments);
//           } catch (e) {
//             console.error('Initializing Card failed', e);
//             return;
//           }
        
//           // Step 5.2: create card payment
//         });
     
//       }
//     </script>
//   )
// }

export default Payment;