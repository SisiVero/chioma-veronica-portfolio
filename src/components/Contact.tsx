import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
export function Contact() {
  // const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setFormStatus('sending');
  //   try {
  //     await emailjs.send('YOUR_SERVICE_ID',
  //     // You'll need to replace these with your EmailJS credentials
  //     'YOUR_TEMPLATE_ID', {
  //       to_email: 'veronicaezezim@gmail.com',
  //       from_name: formData.name,
  //       from_email: formData.email,
  //       subject: formData.subject,
  //       message: formData.message
  //     }, 'YOUR_PUBLIC_KEY');
  //     setFormStatus('success');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       subject: '',
  //       message: ''
  //     });
  //   } catch (error) {
  //     setFormStatus('error');
  //   }
  // };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     [e.target.id]: e.target.value
  //   }));
  // };
  return <section id="contact" className="py-20 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="flex">
          <div className="md:w-[70vw] md:mx-auto w-full">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
                Contact Information
              </h3>
              <div className="md:flex md:items-center md:justify-center md:gap-8 md:flex-row ">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MailIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <a href="mailto:veronicaezezim@gmail.com" className="text-gray-700 hover:text-blue-600">
                      veronicaezezim@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <PhoneIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-700 hover:text-blue-600">
                      +234 907-344-5627
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPinIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      Location
                    </h4>
                    <p className="text-gray-700">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>;
}




          // <div className="md:w-1/2">
          //   <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
          //     <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          //       Send Me a Message
          //     </h3>
          //     <form onSubmit={handleSubmit}>
          //       <div className="mb-4">
          //         <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
          //           Name
          //         </label>
          //         <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" required />
          //       </div>
          //       <div className="mb-4">
          //         <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
          //           Email
          //         </label>
          //         <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your email" />
          //       </div>
          //       <div className="mb-4">
          //         <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
          //           Subject
          //         </label>
          //         <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Subject" />
          //       </div>
          //       <div className="mb-6">
          //         <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
          //           Message
          //         </label>
          //         <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message"></textarea>
          //       </div>
          //       <button type="submit" disabled={formStatus === 'sending'} className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50">
          //         {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
          //       </button>
          //       {formStatus === 'success' && <p className="mt-4 text-green-600 dark:text-green-400">
          //           Message sent successfully!
          //         </p>}
          //       {formStatus === 'error' && <p className="mt-4 text-red-600 dark:text-red-400">
          //           Failed to send message. Please try again.
          //         </p>}
          //     </form>
          //   </div>
          // </div>