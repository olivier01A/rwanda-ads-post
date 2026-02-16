import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { 
  CreditCard, 
  Smartphone, 
  Lock, 
  CheckCircle,
  ArrowLeft 
} from 'lucide-react';

export default function PaymentPage() {
  const { adId } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'card'>('momo');
  const [paymentData, setPaymentData] = useState({
    amount: '5000',
    momoPhone: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVV: ''
  });
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            Your ad has been promoted successfully. Redirecting to dashboard...
          </p>
          <div className="animate-spin w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment</h1>
          <p className="text-gray-600">Choose your payment method and complete the transaction</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              {/* Payment Method Selection */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Select Payment Method
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* MTN Mobile Money */}
                  <button
                    onClick={() => setPaymentMethod('momo')}
                    className={`
                      p-6 rounded-lg border-2 text-left transition-all
                      ${paymentMethod === 'momo' 
                        ? 'border-yellow-500 bg-yellow-50' 
                        : 'border-gray-200 hover:border-yellow-300'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">MTN MoMo</div>
                        <div className="text-sm text-gray-600">🇷🇼 Rwanda</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">
                      Pay with MTN Mobile Money
                    </p>
                  </button>

                  {/* Card Payment */}
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`
                      p-6 rounded-lg border-2 text-left transition-all
                      ${paymentMethod === 'card' 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Card</div>
                        <div className="text-sm text-gray-600">Visa/Mastercard</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">
                      Pay with credit/debit card
                    </p>
                  </button>
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handleSubmit}>
                {paymentMethod === 'momo' ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Amount (RWF)
                      </label>
                      <input
                        type="text"
                        value={paymentData.amount}
                        readOnly
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 font-bold text-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        MTN Mobile Money Number *
                      </label>
                      <input
                        type="tel"
                        value={paymentData.momoPhone}
                        onChange={(e) => setPaymentData({ ...paymentData, momoPhone: e.target.value })}
                        placeholder="078 XXX XXXX"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                      <p className="mt-2 text-sm text-gray-600">
                        You will receive a prompt on your phone to authorize the payment
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Amount (RWF)
                      </label>
                      <input
                        type="text"
                        value={paymentData.amount}
                        readOnly
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 font-bold text-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        value={paymentData.cardNumber}
                        onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        value={paymentData.cardName}
                        onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          value={paymentData.cardExpiry}
                          onChange={(e) => setPaymentData({ ...paymentData, cardExpiry: e.target.value })}
                          placeholder="MM/YY"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          value={paymentData.cardCVV}
                          onChange={(e) => setPaymentData({ ...paymentData, cardCVV: e.target.value })}
                          placeholder="123"
                          maxLength={3}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-semibold mb-1">Secure Payment</p>
                    <p className="text-blue-700">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full mt-6 px-6 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {processing ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-3 border-white border-t-transparent rounded-full"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      <span>Pay Securely</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Featured Ad (30 days)</span>
                  <span className="font-semibold">5,000 RWF</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Processing Fee</span>
                  <span className="font-semibold">0 RWF</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                  <span>Total</span>
                  <span className="text-green-600">5,000 RWF</span>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Featured badge on your ad</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>3x more visibility</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Show in Featured section</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Valid for 30 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}