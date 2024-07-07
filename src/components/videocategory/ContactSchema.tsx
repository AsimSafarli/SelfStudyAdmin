import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  video_type: Yup.string().required("Video type yazılmalıdır"),
});

export { ContactSchema };
