import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Upload, 
  X, 
  Check, 
  ChevronRight,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react';
import { categories } from '../data/mockData';

type Step = 'category' | 'details' | 'images' | 'adType';

export default function PostAdPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('category');
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    price: '',
    location: '',
    condition: 'new',
    phone: '',
    images: [] as File[],
    adType: 'free'
  });

  const steps: { id: Step; label: string; number: number }[] = [
    { id: 'category', label: 'Select Category', number: 1 },
    { id: 'details', label: 'Add Details', number: 2 },
    { id: 'images', label: 'Upload Images', number: 3 },
    { id: 'adType', label: 'Choose Ad Type', number: 4 }
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  const handleNext = () => {
    const nextStep = steps[currentStepIndex + 1];
    if (nextStep) {
      setCurrentStep(nextStep.id);
    }
  };

  const handleBack = () => {
    const prevStep = steps[currentStepIndex - 1];
    if (prevStep) {
      setCurrentStep(prevStep.id);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, images: [...formData.images, ...files].slice(0, 5) });
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = () => {
    if (formData.adType === 'free') {
      // Submit free ad
      alert('Ad posted successfully!');
      navigate('/dashboard');
    } else {
      // Redirect to payment
      navigate('/payment/new');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post Your Ad</h1>
          <p className="text-gray-600">Fill in the details to create your ad</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex items-center flex-col sm:flex-row sm:space-x-3 flex-1">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0
                    ${index <= currentStepIndex 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                    }
                  `}>
                    {index < currentStepIndex ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className={`
                    text-sm mt-2 sm:mt-0 text-center sm:text-left
                    ${index <= currentStepIndex ? 'text-gray-900 font-semibold' : 'text-gray-500'}
                  `}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    hidden sm:block h-1 flex-1 mx-4
                    ${index < currentStepIndex ? 'bg-green-600' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          {/* Step 1: Category */}
          {currentStep === 'category' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Category</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFormData({ ...formData, category: cat.id })}
                    className={`
                      p-6 rounded-lg border-2 transition-all text-center
                      ${formData.category === cat.id
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                      }
                    `}
                  >
                    <div className="font-semibold text-gray-900">{cat.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {currentStep === 'details' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ad Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., iPhone 14 Pro Max - 256GB"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your item in detail..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Price (RWF) *
                    </label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Condition *
                    </label>
                    <select
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="new">New</option>
                      <option value="used">Used</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g., Kigali, Kicukiro"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+250 788 000 000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Images */}
          {currentStep === 'images' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Images</h2>
              <p className="text-gray-600 mb-6">Add up to 5 images (first image will be the cover)</p>
              
              <div className="space-y-4">
                {formData.images.length < 5 && (
                  <label className="block">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-700 font-semibold mb-1">
                        Click to upload images
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG up to 5MB each
                      </p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}

                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {formData.images.map((file, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        {index === 0 && (
                          <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                            Cover
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Ad Type */}
          {currentStep === 'adType' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Ad Type</h2>
              
              <div className="space-y-4">
                {/* Free Ad */}
                <button
                  onClick={() => setFormData({ ...formData, adType: 'free' })}
                  className={`
                    w-full p-6 rounded-lg border-2 text-left transition-all
                    ${formData.adType === 'free' 
                      ? 'border-green-600 bg-green-50' 
                      : 'border-gray-200 hover:border-green-300'
                    }
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1
                      ${formData.adType === 'free' 
                        ? 'border-green-600 bg-green-600' 
                        : 'border-gray-300'
                      }
                    `}>
                      {formData.adType === 'free' && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">Free Ad</h3>
                        <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                          0 RWF
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Post for free</li>
                        <li>✓ Visible in search results</li>
                        <li>✓ Valid for 30 days</li>
                      </ul>
                    </div>
                  </div>
                </button>

                {/* Featured Ad */}
                <button
                  onClick={() => setFormData({ ...formData, adType: 'featured' })}
                  className={`
                    w-full p-6 rounded-lg border-2 text-left transition-all
                    ${formData.adType === 'featured' 
                      ? 'border-yellow-500 bg-yellow-50' 
                      : 'border-gray-200 hover:border-yellow-300'
                    }
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1
                      ${formData.adType === 'featured' 
                        ? 'border-yellow-500 bg-yellow-500' 
                        : 'border-gray-300'
                      }
                    `}>
                      {formData.adType === 'featured' && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <h3 className="text-xl font-bold text-gray-900">Featured Ad</h3>
                        <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full">
                          5,000 RWF
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ All Free Ad features</li>
                        <li>✓ Featured badge on your ad</li>
                        <li>✓ 3x more visibility</li>
                        <li>✓ Show in Featured section</li>
                        <li>✓ Valid for 30 days</li>
                      </ul>
                    </div>
                  </div>
                </button>

                {/* Top Ad */}
                <button
                  onClick={() => setFormData({ ...formData, adType: 'top' })}
                  className={`
                    w-full p-6 rounded-lg border-2 text-left transition-all
                    ${formData.adType === 'top' 
                      ? 'border-purple-600 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                    }
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1
                      ${formData.adType === 'top' 
                        ? 'border-purple-600 bg-purple-600' 
                        : 'border-gray-300'
                      }
                    `}>
                      {formData.adType === 'top' && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        <h3 className="text-xl font-bold text-gray-900">Top Ad</h3>
                        <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                          10,000 RWF
                        </span>
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded">
                          BEST VALUE
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ All Featured Ad benefits</li>
                        <li>✓ Stay at top of listings</li>
                        <li>✓ 5x more visibility</li>
                        <li>✓ Priority in search results</li>
                        <li>✓ Valid for 30 days</li>
                      </ul>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleBack}
              disabled={currentStepIndex === 0}
              className="px-6 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            {currentStepIndex < steps.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={
                  (currentStep === 'category' && !formData.category) ||
                  (currentStep === 'details' && (!formData.title || !formData.description || !formData.price || !formData.location || !formData.phone))
                }
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>
                  {formData.adType === 'free' ? 'Post Ad' : 'Continue to Payment'}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}