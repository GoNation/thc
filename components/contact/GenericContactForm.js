import NetlifyForm from './NetlifyForm';

export default function GenericContactForm({ title = 'Contact Form', desc }) {
  return (
    <div className="flex justify-center items-center bg-lighter p-4 lg:py-12">
      <NetlifyForm
        name="genericContactForm"
        successRedirect={'/success/contact'}
      >
        <h2 className="text-center text-2xl font-bold font-display uppercase mb-4 lg:text-xl xl:text-4xl">
          {title}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className="w-full p-2 border border-secondary rounded"
          />

          <input
            type="tel"
            name="Phone"
            placeholder="Phone"
            className="w-full p-2 border border-secondary rounded"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="w-full p-2 border border-secondary rounded"
          />

          <textarea
            name="Message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-2 border border-secondary rounded"
          ></textarea>

          <button
            type="submit"
            className="mt-4 w-full p-2 bg-primary text-background rounded"
          >
            Submit
          </button>
        </div>
      </NetlifyForm>
    </div>
  );
}
