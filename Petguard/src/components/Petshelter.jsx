import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Petshelter() {
  // Validation Schema using Yup (adjust as needed)
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    breed: Yup.string().required("Breed is required"),
    age: Yup.number().required("Age is required").positive("Age must be positive"),
    vaccinated: Yup.boolean().required("Vaccination status is required"),
    size: Yup.string().required("Size is required"),
    adoptionFee: Yup.number().required("Adoption Fee is required").min(0, "Fee must be non-negative"),
    status: Yup.string().required("Status is required"),
    image: Yup.mixed().required("Animal image is required"),
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/cat-1364352.jpg')` }}
    >
      <div className="flex justify-center h-full bg-opacity-40">
        <div className="max-w-lg mx-auto p-8 mt-10 bg-white bg-opacity-20 shadow-lg rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
            🐾 Add Animal Details 🐾
          </h2>

          <Formik
            initialValues={{
              name: "",
              breed: "",
              age: "",
              vaccinated: false,
              size: "",
              adoptionFee: "",
              status: "",
              image: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Animal Details Submitted", values);
            }}
          >
            {({ setFieldValue }) => (
              <Form className="space-y-5">
                {/* Name */}
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Breed */}
                <Field
                  type="text"
                  name="breed"
                  placeholder="Breed"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <ErrorMessage
                  name="breed"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Age */}
                <Field
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Vaccinated */}
                <div className="flex items-center">
                  <label className="mr-2">Vaccinated:</label>
                  <Field type="checkbox" name="vaccinated" className="form-checkbox h-5 w-5 text-green-600" />
                </div>
                <ErrorMessage
                  name="vaccinated"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Size */}
                <Field
                  as="select"
                  name="size"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">Select Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Field>
                <ErrorMessage
                  name="size"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Adoption Fee */}
                <Field
                  type="number"
                  name="adoptionFee"
                  placeholder="Adoption Fee"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <ErrorMessage
                  name="adoptionFee"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Status */}
                <Field
                  as="select"
                  name="status"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">Select Status</option>
                  <option value="available">Available</option>
                  <option value="pending">Pending</option>
                  <option value="adopted">Adopted</option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Image Upload */}
                <div className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200">
                  <input
                    type="file"
                    accept="image/"
                    onChange={(e) => setFieldValue("image", e.target.files[0])}
                    
                  />
                  <span className="text-gray-500">📷 Upload Animal Image</span>
                </div>
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Add Animal
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Petshelter;