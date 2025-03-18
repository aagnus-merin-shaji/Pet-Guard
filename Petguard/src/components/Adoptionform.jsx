import { useFormik } from "formik";
import * as yup from "yup";

function Adoptionform() {
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    address: yup.string().required("Address is required"),
    petPreference: yup.string().required("Please select a pet preference"),
    experience: yup.string().required("Experience is required"),
    reasonForAdoption: yup.string().required("Reason for adoption is required"),
    image: yup.mixed().required("Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      petPreference: "",
      experience: "",
      reasonForAdoption: "",
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Adoption Application Submitted", values);
    },
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/pexels-leah-newhouse-50725-776373.jpg')` }} // Replace with your image URL
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-xl mx-auto p-8 mt-10 bg-white bg-opacity-50 shadow-2xl rounded-3xl border border-gray-300">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700">
            🐶 Adopter Application Form 🐱
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
              )}
            </div>

            <div className="flex flex-col">
              <select
                name="petPreference"
                value={formik.values.petPreference}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Pet Preference</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
              </select>
              {formik.touched.petPreference && formik.errors.petPreference && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.petPreference}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <textarea
                name="experience"
                placeholder="Describe your experience with pets"
                value={formik.values.experience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formik.touched.experience && formik.errors.experience && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.experience}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <textarea
                name="reasonForAdoption"
                placeholder="Why do you want to adopt a pet?"
                value={formik.values.reasonForAdoption}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formik.touched.reasonForAdoption &&
                formik.errors.reasonForAdoption && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.reasonForAdoption}
                  </p>
                )}
            </div>

            <div className="flex flex-col">
              <input
                type="file"
                accept="image/*"
                onChange={(event) =>
                  formik.setFieldValue("image", event.currentTarget.files[0])
                }
                className="w-full p-4 border border-gray-300 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200"
              />
              {formik.errors.image && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
              )}
            </div>

            <a
  href="/request" // Changed href to your application request endpoint
  className="w-full bg-indigo-600 text-white p-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition duration-300 text-center block"
>
  Submit Application Request
</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adoptionform;