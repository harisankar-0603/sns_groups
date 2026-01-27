import { MapPin, Phone, Globe } from 'lucide-react';

const LocationContactSection = () => {
  return (
    <section className="w-full py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Locations Section */}
          <div className="w-full lg:w-3/4">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2 text-gray-700" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Our Locations</h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-evenly gap-6 md:gap-8">
              {/* Location 1 - Coimbatore */}
              <div className="text-center md:text-left">
                <p className="text-sm md:text-base font-medium text-gray-700">
                  536, Thudiyalur - Saravanampatti Rd, Vellakinar,
                </p>
                <p className="text-sm md:text-base font-medium text-gray-700">
                  Coimbatore, Tamil Nadu 641029
                </p>
              </div>

              {/* Location 2 - Bengaluru */}
              <div className="text-center md:text-left">
                <p className="text-sm md:text-base font-medium text-gray-700">
                  Embassy Tech Village, ORR, Bellandur,
                </p>
                <p className="text-sm md:text-base font-medium text-gray-700">
                  Bengaluru, Karnataka 560103
                </p>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-xs">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 text-center">
                Contact Us
              </h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a 
                    href="tel:+919566423456" 
                    className="text-sm md:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    95664 23456
                  </a>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a 
                    href="https://www.snsgroups.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-medium text-blue-600 hover:underline break-all"
                  >
                    www.snsgroups.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContactSection;
