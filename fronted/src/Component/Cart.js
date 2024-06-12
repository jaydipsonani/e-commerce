import React, { useEffect, useState } from 'react'
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from '../redux/action';

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    const totalExcludingGST = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const GST = (totalExcludingGST * 0.12);

    const totalIncludingGST = totalExcludingGST + GST;

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text('Invoice', 20, 20);
        doc.autoTable({
            startY: 30,
            head: [['Title', 'Price', 'Quantity', 'Total']],
            body: cartItems.map(item => [
                // { content: ' ', styles: { cellWidth: 10 }, img: item.image },
                item.title,
                `$${item.price}`,
                item.quantity || 0,
                `$${(item.price * (item.quantity || 0)).toFixed(2)}`
            ]),
        });

        doc.text(`Total (Excluding GST): $${totalExcludingGST.toFixed(2)}`, 20, doc.autoTable.previous.finalY + 10);
        doc.text(`GST (12%): $${GST.toFixed(2)}`, 20, doc.autoTable.previous.finalY + 20);
        doc.text(`Total (Including GST): $${totalIncludingGST.toFixed(2)}`, 20, doc.autoTable.previous.finalY + 30);

        doc.save('invoice.pdf')

            dispatch(clearCart())
    };

    return (
        <div>
            {cartItems.length > 0 ? (
                <table className="table" width="100%" border="1px solid black">
                    <thead>
                        <tr>
                            <th width="15%" >Image</th>
                            <th width="25%">Title</th>
                            <th width="15%">Price</th>
                            <th width="15%">Quantity</th>
                            <th width="15%">Total</th>
                            <th width="15%">action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td><img src={item.image} alt={item.title} style={{ width: '60px', height: '60px'}} /></td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button style={{ marginRight: "5px", width:"25px" }} onClick={() => dispatch(decrementQuantity(index))}>-</button>
                                    {item.quantity || 0}
                                    <button style={{ marginLeft: "5px", width:"25px"  }} onClick={() => dispatch(incrementQuantity(index))}>+</button>
                                </td>
                                <td>${(item.price * (item.quantity || 0)).toFixed(2)}</td>
                                <td><button onClick={() => dispatch(removeFromCart(index))} className='btn btn-primary'>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'right' }}><b>Total (Excluding GST):-</b></td>
                            <td>${totalExcludingGST.toFixed(2)}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'right' }}><b>GST (12%):-</b></td>
                            <td>${GST.toFixed(2)}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'right' }}><b>Total (Including GST):-</b></td>
                            <td>${totalIncludingGST.toFixed(2)}</td>
                            <td><button onClick={generatePDF} className='btn btn-primary'>Download Invoice</button></td>
                        </tr>

                    </tfoot>
                </table>
            ) : (
                <div style={{ display: "flex", height: "90vh", justifyContent: "center", alignItems: "center" }}>
                    <h1>Your cart is empty.</h1>
                </div>
            )}
        </div>
    )
}

export default Cart
