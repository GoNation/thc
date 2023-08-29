import NetlifyForm from './NetlifyForm';

export default function WeddingForm({ title, text }) {
  return (
    <div className="flex justify-center items-center bg-lighter p-4  	lg:py-12 ">
      <NetlifyForm name="weddingForm">
        {title || text ? (
          <div className="max-w-xl mb-4">
            <h4 className="text-primary font-display text-4xl md:text-3xl font-bold uppercase text-left">
              {title}
            </h4>
            <p className="text-dark">{text}</p>
          </div>
        ) : (
          ''
        )}
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

          <input
            type="date"
            name="Date of Wedding"
            placeholder="Date of Wedding"
            className="w-full p-2 border border-secondary rounded"
          />

          <input
            type="number"
            name="Number of Guests"
            placeholder="Number of Guests"
            className="w-full p-2 border border-secondary rounded"
          />

          <textarea
            name="Comments, Questions, Any Details"
            placeholder="Comments, Questions, Any Details"
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