import React from 'react';

export default function Cart({ isOpen, setIsOpen, cartItems, updateQuantity, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5491134567890'; // Default number if not set in .env

  const sendWhatsApp = () => {
    let message = "Hola Velas Ana! Quiero hacer el siguiente pedido:%0A%0A";
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.name} ($${item.price.toLocaleString('es-AR')})%0A`;
    });
    message += `%0ATotal a pagar: $${total.toLocaleString('es-AR')}%0A%0AGracias!`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-serif text-2xl text-brand-primary">Tu carrito</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🛒</span>
              </div>
              <p>Tu carrito está vacío.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-primary font-medium hover:underline"
              >
                Volver a la tienda
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-20 h-20 bg-brand-bg rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
                    <div className="text-brand-primary font-semibold text-sm mt-1">
                      ${item.price.toLocaleString('es-AR')}
                    </div>
                    <div className="flex items-center mt-2 space-x-3 bg-gray-50 w-fit rounded-lg border border-gray-100">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-gray-500 hover:text-brand-secondary"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-gray-500 hover:text-brand-primary"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-300 hover:text-red-500 p-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600 font-medium">Total</span>
              <span className="font-serif text-2xl text-brand-primary">
                ${total.toLocaleString('es-AR')}
              </span>
            </div>
            <button 
              onClick={sendWhatsApp}
              className="w-full bg-[#25D366] text-white py-4 rounded-xl font-medium hover:bg-[#20bd5a] transition-colors shadow-md flex justify-center items-center gap-2"
            >
              Enviar pedido por WhatsApp
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              Serás redirigido a WhatsApp para coordinar el pago y envío directamente.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
