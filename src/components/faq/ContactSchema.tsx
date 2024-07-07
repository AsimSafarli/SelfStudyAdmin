import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  question: Yup.string().required("Sual yazılmalıdır"),
  answer: Yup.string().required("Sualin cavabi   yazılmalıdır"),
});

export { ContactSchema };
