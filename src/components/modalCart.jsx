import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ModalCart({ isOpen, onClose }) {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  if (!isOpen) return null;

  const cotizar = () => {
    const mensaje = cart
      .map(item =>
        `🛠️ *ID:* ${item.id}\n*Producto:* ${item.name}\n*Cantidad:* ${item.qty}`
      )
      .join('\n\n');

    const url = `https://wa.me/50685011430?text=${encodeURIComponent(
      `Hola, me gustaría cotizar los siguientes productos:\n\n${mensaje}`
    )}`;

    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div
        className="relative w-full max-w-md p-6 rounded-2xl shadow-xl border-4 border-double border-orange-300 bg-gradient-to-br from-white via-gray-50 to-white bg-[url('/textures/paper.png')] bg-cover"
      >
        {/* Ornamento decorativo */}
        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-2xl border-4 border-white shadow-inner pointer-events-none"></div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold z-10"
        >
          ×
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-5 text-blue-900 text-center tracking-tight">
          🛒 Carrito de Compras
        </h2>

        {/* Contenido */}
        {cart.length === 0 ? (
          <p className="text-gray-700 text-center italic">Tu carrito está vacío.</p>
        ) : (
          <ul className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-start justify-between border-b pb-3 gap-4"
              >
                <div className="flex-1">
                  <p className="text-base font-semibold text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">ID: {item.id}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 bg-gray-200 hover:bg-gray-300 rounded shadow-sm"
                    >
                      -
                    </button>
                    <span className="text-gray-700">{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 bg-gray-200 hover:bg-gray-300 rounded shadow-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-blue-700 font-semibold text-sm">
                    ₡{item.price ?? '0'}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-base"
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Botón cotizar */}
        <div className="mt-6">
          <button
            onClick={cotizar}
            disabled={cart.length === 0}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold px-4 py-2 rounded-xl shadow-lg transition duration-200"
          >
            Cotizar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
